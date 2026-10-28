<script lang="ts">
	import GoalProgressCircle from '#lib/components/GoalProgressCircle.svelte';
	import type { Goal, GoalDraft, SaveResult } from '#lib/types.ts';

	let {
		goal,
		onSave
	}: {
		goal: Goal;
		onSave: (goalId: number, values: GoalDraft) => Promise<SaveResult>;
	} = $props();

	let isEditing = $state(false);
	let isSaving = $state(false);
	let editError = $state('');

	function toDraft(source: Goal): GoalDraft {
		return {
			title: source.title,
			description: source.description,
			achieved: source.achieved,
			endDate: source.endDate
		};
	}

	let editForm = $state<GoalDraft>({
		title: '',
		description: '',
		achieved: 0,
		endDate: ''
	});

	$effect(() => {
		if (!isEditing) {
			editForm = toDraft(goal);
		}
	});

	function formatEndDate(date: string) {
		if (!date) return 'No end date';
		const [year, month, day] = date.split('-').map(Number);
		return new Date(year, month - 1, day).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function clampProgress(value: number) {
		if (Number.isNaN(value)) return 0;
		return Math.min(100, Math.max(0, Math.round(value)));
	}

	function startEdit() {
		isEditing = true;
		editError = '';
		editForm = {
			title: goal.title,
			description: goal.description,
			achieved: goal.achieved,
			endDate: goal.endDate
		};
	}

	function cancelEdit() {
		isEditing = false;
		editError = '';
	}

	async function saveEdit(event: SubmitEvent) {
		event.preventDefault();
		isSaving = true;
		editError = '';

		const result = await onSave(goal.id, {
			title: editForm.title.trim(),
			description: editForm.description.trim(),
			achieved: clampProgress(editForm.achieved),
			endDate: editForm.endDate
		});

		isSaving = false;
		if (result.ok) {
			isEditing = false;
			return;
		}

		editError = result.error;
	}
</script>

<article class="goal-card">
	{#if isEditing}
		<h3>Edit goal</h3>
		<form class="goal-form" onsubmit={saveEdit}>
			<label>
				Title
				<input type="text" bind:value={editForm.title} required />
			</label>
			<label>
				Description
				<textarea bind:value={editForm.description} rows="3"></textarea>
			</label>
			<label>
				Achieved (%)
				<input type="number" min="0" max="100" bind:value={editForm.achieved} />
			</label>
			<label>
				End date
				<input type="date" bind:value={editForm.endDate} />
			</label>
			<div class="actions">
				<button type="submit" disabled={isSaving}>{isSaving ? 'Saving...' : 'Save'}</button>
				<button type="button" class="secondary" onclick={cancelEdit} disabled={isSaving}>Cancel</button>
			</div>
			{#if editError}
				<p class="error">{editError}</p>
			{/if}
		</form>
	{:else}
		<div class="card-top">
			<h3>{goal.title}</h3>
			<button type="button" class="secondary" onclick={startEdit}>Edit</button>
		</div>

		<p class="description">{goal.description || 'No description'}</p>
		<p class="end-date">End date: {formatEndDate(goal.endDate)}</p>
		<GoalProgressCircle achieved={goal.achieved} />
	{/if}
</article>

<style>
	.goal-card {
		background: #1f2937;
		color: #f9fafb;
		border-radius: 14px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		border: 1px solid #374151;
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
		border: 1px solid #4b5563;
		background: #111827;
		color: #f9fafb;
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

	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	button.secondary {
		background: #e5e7eb;
		color: #1f2937;
	}

	.actions {
		display: flex;
		gap: 8px;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: start;
		gap: 10px;
	}

	h3 {
		margin: 0;
		font-size: 1.2rem;
	}

	.description {
		margin: 0;
		color: #d1d5db;
		min-height: 44px;
	}

	.end-date {
		margin: 0;
		font-size: 0.9rem;
		color: #9ca3af;
	}

	.error {
		margin: 4px 0 0;
		color: #ef4444;
		font-weight: 600;
	}
</style>
