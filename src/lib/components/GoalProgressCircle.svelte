<script lang="ts">
	let { achieved }: { achieved: number } = $props();

	const clampedProgress = $derived(Math.max(0, Math.min(100, Math.round(achieved))));
	const progressClass = $derived(
		clampedProgress <= 15
			? 'progress-red'
			: clampedProgress <= 50
				? 'progress-orange'
				: clampedProgress <= 75
					? 'progress-amber'
					: 'progress-green'
	);
</script>

<div class="progress-wrap">
	<div class={`progress-circle ${progressClass}`} style={`--progress: ${clampedProgress}`}>
		<span>{clampedProgress}%</span>
	</div>
</div>

<style>
	.progress-wrap {
		display: flex;
		justify-content: center;
		margin-top: 6px;
	}

	.progress-circle {
		--progress: 0;
		--fill: #16a34a;
		--track: #e5e7eb;
		width: 130px;
		height: 130px;
		border-radius: 50%;
		background: conic-gradient(var(--fill) calc(var(--progress) * 1%), var(--track) 0);
		display: grid;
		place-items: center;
		position: relative;
	}

	.progress-circle::before {
		content: '';
		width: 88px;
		height: 88px;
		border-radius: 50%;
		background: #111827;
		position: absolute;
	}

	.progress-circle span {
		position: relative;
		z-index: 1;
		font-size: 1.7rem;
		font-weight: 800;
		color: var(--fill);
	}

	.progress-red {
		--fill: #ef4444;
	}

	.progress-orange {
		--fill: #f97316;
	}

	.progress-amber {
		--fill: #f59e0b;
	}

	.progress-green {
		--fill: #22c55e;
	}
</style>
