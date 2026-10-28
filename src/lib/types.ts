export type Goal = {
	id: number;
	title: string;
	description: string;
	achieved: number;
	endDate: string;
};

export type GoalDraft = Omit<Goal, 'id'>;

export type SaveResult = { ok: true } | { ok: false; error: string };
