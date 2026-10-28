<script lang="ts">
	import { onMount } from 'svelte';
	import GoalCard from '#lib/components/GoalCard.svelte';
	import type { Goal, GoalDraft, SaveResult } from '#lib/types.ts';

	const API_BASE_URL = import.meta.env.VITE_GOALS_API_URL || 'http://localhost:7001';
	const emptyGoalForm: GoalDraft = { title: '', description: '', achieved: 0, endDate: '' };

	let goals = $state<Goal[]>([]);
	let isLoading = $state(true);
	let loadError = $state('');
	let createError = $state('');
	let createForm = $state<GoalDraft>({ ...emptyGoalForm });

	const totalGoals = $derived(goals.length);
	const averageProgress = $derived(
		goals.length > 0
			? Math.round(goals.reduce((sum, goal) => sum + goal.achieved, 0) / goals.length)
			: 0
	);

	function clampProgress(value: number) {
		if (Number.isNaN(value)) return 0;
		return Math.min(100, Math.max(0, Math.round(value)));
	}

	function getErrorMessage(error: unknown) {
		return error instanceof Error ? error.message : 'Unknown error';
	}

	async function request<T>(path: string, options: RequestInit = {}) {
		const response = await fetch(`${API_BASE_URL}${path}`, {
			headers: {
				'Content-Type': 'application/json',
				...(options.headers || {})
			},
			...options
		});

		const contentType = response.headers.get('content-type') || '';
		const responseBody = contentType.includes('application/json')
			? ((await response.json()) as T | { error?: string })
			: null;

		if (!response.ok) {
			const message =
				responseBody && typeof responseBody === 'object' && 'error' in responseBody
					? (responseBody.error ?? `Request failed with status ${response.status}.`)
					: `Request failed with status ${response.status}.`;
			throw new Error(message);
		}

		return responseBody as T;
	}

	async function fetchGoals() {
		isLoading = true;
		loadError = '';
		try {
			goals = await request<Goal[]>('/goals');
		} catch (error) {
			loadError = getErrorMessage(error);
		} finally {
			isLoading = false;
		}
	}

	async function createGoal() {
		createError = '';
		try {
			const newGoal = await request<Goal>('/goals', {
				method: 'POST',
				body: JSON.stringify({
					title: createForm.title.trim(),
					description: createForm.description.trim(),
					achieved: clampProgress(createForm.achieved),
					endDate: createForm.endDate
				})
			});
			goals = [newGoal, ...goals];
			createForm = { ...emptyGoalForm };
		} catch (error) {
			createError = getErrorMessage(error);
		}
	}

	async function saveGoal(goalId: number, values: GoalDraft): Promise<SaveResult> {
		try {
			const updatedGoal = await request<Goal>(`/goals/${goalId}`, {
				method: 'PUT',
				body: JSON.stringify({
					title: values.title.trim(),
					description: values.description.trim(),
					achieved: clampProgress(values.achieved),
					endDate: values.endDate
				})
			});

			goals = goals.map((goal) => (goal.id === goalId ? updatedGoal : goal));
			return { ok: true };
		} catch (error) {
			return { ok: false, error: getErrorMessage(error) };
		}
	}

	onMount(fetchGoals);
</script>

<main class="page">
	<header class="top">
		<h1>Goal Tracker</h1>
		<p>Track all your goals and their progress.</p>
	</header>

	<section class="summary">
		<div class="summary-item">
			<span class="summary-label">Total goals</span>
			<strong>{totalGoals}</strong>
		</div>
		<div class="summary-item">
			<span class="summary-label">Average achieved</span>
			<strong>{averageProgress}%</strong>
		</div>
	</section>

	<section class="panel">
		<h2>Create goal</h2>
		<form
			class="goal-form"
			onsubmit={(event) => {
				event.preventDefault();
				void createGoal();
			}}
		>
			<label>
				Title
				<input type="text" bind:value={createForm.title} required placeholder="Enter goal title" />
			</label>

			<label>
				Description
				<textarea
					bind:value={createForm.description}
					rows="3"
					placeholder="Describe your goal"
				></textarea>
			</label>

			<label>
				Achieved (%)
				<input type="number" min="0" max="100" bind:value={createForm.achieved} />
			</label>

			<label>
				End date
				<input type="date" bind:value={createForm.endDate} />
			</label>

			<button type="submit">Create goal</button>
			{#if createError}
				<p class="error">{createError}</p>
			{/if}
		</form>
	</section>

	{#if loadError}
		<p class="error">{loadError}</p>
	{/if}

	<section class="cards">
		{#if isLoading}
			<p class="empty">Loading goals...</p>
		{:else if goals.length === 0}
			<p class="empty">No goals yet. Add your first goal above.</p>
		{:else}
			{#each goals as goal (goal.id)}
				<GoalCard {goal} onSave={saveGoal} />
			{/each}
		{/if}
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		background: #eef2ff;
		color: #111827;
	}

	.page {
		max-width: 980px;
		margin: 0 auto;
		padding: 24px 16px 40px;
	}

	.top h1 {
		margin: 0;
		font-size: 2rem;
	}

	.top p {
		margin-top: 8px;
		color: #4b5563;
	}

	.summary {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 12px;
		margin: 20px 0 24px;
	}

	.summary-item {
		background: #ffffff;
		border: 1px solid #dbeafe;
		border-radius: 12px;
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.summary-label {
		color: #64748b;
		font-size: 0.9rem;
	}

	.summary-item strong {
		font-size: 1.5rem;
	}

	.panel {
		background: #ffffff;
		border: 1px solid #dbeafe;
		border-radius: 12px;
		padding: 16px;
		margin-bottom: 20px;
	}

	.panel h2 {
		margin: 0 0 14px;
	}

	.goal-form {
		display: grid;
		gap: 12px;
	}

	label {
		display: grid;
		gap: 6px;
		font-size: 0.92rem;
		font-weight: 600;
	}

	input,
	textarea {
		font: inherit;
		width: 100%;
		box-sizing: border-box;
		padding: 9px 10px;
		border-radius: 8px;
		border: 1px solid #cbd5e1;
		background: #f8fafc;
	}

	input:focus,
	textarea:focus {
		outline: 2px solid #93c5fd;
		border-color: #93c5fd;
	}

	button {
		border: 0;
		border-radius: 8px;
		padding: 10px 12px;
		font: inherit;
		font-weight: 600;
		background: #2563eb;
		color: #ffffff;
		cursor: pointer;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 16px;
	}

	.empty {
		grid-column: 1 / -1;
		margin: 8px 0;
		color: #475569;
	}

	.error {
		margin: 4px 0 0;
		color: #ef4444;
		font-weight: 600;
	}
</style>
