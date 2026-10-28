import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 7001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE_PATH = path.join(__dirname, 'mock-data', 'goals.json');
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };
const CORS_HEADERS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type'
};

function sendJson(res, statusCode, payload) {
	res.writeHead(statusCode, { ...JSON_HEADERS, ...CORS_HEADERS });
	res.end(JSON.stringify(payload));
}

function loadDefaultGoals() {
	try {
		const fileContents = fs.readFileSync(DATA_FILE_PATH, 'utf8');
		const parsed = JSON.parse(fileContents);
		if (!Array.isArray(parsed)) {
			throw new Error('Mock goals file must contain an array.');
		}

		return parsed.map((goal) => ({
			id: Number(goal.id),
			title: typeof goal.title === 'string' ? goal.title : '',
			description: typeof goal.description === 'string' ? goal.description : '',
			achieved: Number.isFinite(Number(goal.achieved)) ? Number(goal.achieved) : 0,
			endDate: typeof goal.endDate === 'string' ? goal.endDate : ''
		}));
	} catch (error) {
		console.error(`Could not load mock goals from ${DATA_FILE_PATH}:`, error.message);
		return [];
	}
}

function normalizeGoalPayload(payload, { requireTitle }) {
	const normalized = {};

	if (Object.prototype.hasOwnProperty.call(payload, 'title')) {
		normalized.title = typeof payload.title === 'string' ? payload.title.trim() : '';
	}

	if (Object.prototype.hasOwnProperty.call(payload, 'description')) {
		normalized.description =
			typeof payload.description === 'string' ? payload.description.trim() : '';
	}

	if (Object.prototype.hasOwnProperty.call(payload, 'achieved')) {
		const achieved = Number(payload.achieved);
		if (!Number.isFinite(achieved) || achieved < 0 || achieved > 100) {
			return { error: 'The "achieved" value must be a number between 0 and 100.' };
		}
		normalized.achieved = achieved;
	}

	if (Object.prototype.hasOwnProperty.call(payload, 'endDate')) {
		normalized.endDate = typeof payload.endDate === 'string' ? payload.endDate : '';
	}

	if (requireTitle && !normalized.title) {
		return { error: 'The "title" field is required.' };
	}

	if (Object.prototype.hasOwnProperty.call(normalized, 'title') && !normalized.title) {
		return { error: 'The "title" field cannot be empty.' };
	}

	return { data: normalized };
}

function readBody(req) {
	return new Promise((resolve, reject) => {
		let body = '';

		req.on('data', (chunk) => {
			body += chunk;
			if (body.length > 1_000_000) {
				reject(new Error('Request body too large.'));
				req.destroy();
			}
		});

		req.on('end', () => {
			if (!body) {
				resolve({});
				return;
			}

			try {
				resolve(JSON.parse(body));
			} catch {
				reject(new Error('Invalid JSON payload.'));
			}
		});

		req.on('error', () => reject(new Error('Could not read request body.')));
	});
}

let goals = loadDefaultGoals();
let nextId = goals.reduce((max, goal) => Math.max(max, Number(goal.id) || 0), 0) + 1;

const server = http.createServer(async (req, res) => {
	if (!req.url || !req.method) {
		sendJson(res, 400, { error: 'Invalid request.' });
		return;
	}

	if (req.method === 'OPTIONS') {
		res.writeHead(204, CORS_HEADERS);
		res.end();
		return;
	}

	const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
	const pathname = requestUrl.pathname;

	if (req.method === 'GET' && pathname === '/goals') {
		sendJson(res, 200, goals);
		return;
	}

	if (req.method === 'POST' && pathname === '/goals') {
		try {
			const payload = await readBody(req);
			const normalizedPayload = normalizeGoalPayload(payload, { requireTitle: true });

			if (normalizedPayload.error) {
				sendJson(res, 400, { error: normalizedPayload.error });
				return;
			}

			const newGoal = {
				id: nextId++,
				title: normalizedPayload.data.title,
				description: normalizedPayload.data.description || '',
				achieved: normalizedPayload.data.achieved ?? 0,
				endDate: normalizedPayload.data.endDate || ''
			};

			goals = [newGoal, ...goals];
			sendJson(res, 201, newGoal);
			return;
		} catch (error) {
			sendJson(res, 400, { error: error.message });
			return;
		}
	}

	const goalPathMatch = pathname.match(/^\/goals\/([^/]+)$/);
	if (goalPathMatch) {
		const id = Number(goalPathMatch[1]);
		if (!Number.isFinite(id)) {
			sendJson(res, 400, { error: 'Invalid goal id.' });
			return;
		}

		const goalIndex = goals.findIndex((goal) => goal.id === id);
		if (goalIndex === -1) {
			sendJson(res, 404, { error: `Goal with id ${id} was not found.` });
			return;
		}

		if (req.method === 'GET') {
			sendJson(res, 200, goals[goalIndex]);
			return;
		}

		if (req.method === 'PUT' || req.method === 'PATCH') {
			try {
				const payload = await readBody(req);
				const normalizedPayload = normalizeGoalPayload(payload, { requireTitle: false });

				if (normalizedPayload.error) {
					sendJson(res, 400, { error: normalizedPayload.error });
					return;
				}

				const updatedGoal = {
					...goals[goalIndex],
					...normalizedPayload.data
				};

				goals[goalIndex] = updatedGoal;
				sendJson(res, 200, updatedGoal);
				return;
			} catch (error) {
				sendJson(res, 400, { error: error.message });
				return;
			}
		}
	}

	sendJson(res, 404, { error: 'Route not found.' });
});

server.listen(PORT, () => {
	console.log(`Mock goals backend is running at http://localhost:${PORT}`);
});
