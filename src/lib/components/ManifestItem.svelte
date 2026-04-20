<script lang="ts">
	import type { ManifestPrinciple } from '$lib/data/manifest';

	let { principle, number }: { principle: ManifestPrinciple; number: number } = $props();
</script>

<article class="principle">
	<div class="number-col">
		<span class="number">{String(number).padStart(2, '0')}</span>
		<span class="accent-bar"></span>
	</div>

	<div class="content-col">
		<h2 class="headline">
			<span class="bold">{principle.headline.bold}</span>{' '}
			<span class="rest">{principle.headline.rest}</span>
		</h2>

		<ul class="points">
			{#each principle.points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	.principle {
		display: grid;
		grid-template-columns: 5rem 1fr;
		gap: var(--space-md);
		padding: var(--space-lg) 0;
		border-bottom: 1px solid var(--color-grey-1000);
	}

	.principle:last-child {
		border-bottom: none;
	}

	.number-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-xs);
		padding-top: 0.2rem;
	}

	.number {
		font-size: var(--size-number);
		font-weight: var(--weight-bold);
		color: var(--text-color);
		letter-spacing: 0.03em;
	}

	.accent-bar {
		display: block;
		width: 1.5rem;
		height: 3px;
		background: var(--highlight-color);
	}

	.content-col {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.headline {
		font-size: var(--size-headline);
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.bold {
		font-weight: var(--weight-black);
		color: var(--text-color);
	}

	.rest {
		font-weight: var(--weight-regular);
		color: var(--text-color);
	}

	.points {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.points li {
		font-size: var(--size-sub);
		font-weight: var(--weight-regular);
		color: var(--text-color);
		line-height: 1.6;
	}

	@media (max-width: 640px) {
		.principle {
			grid-template-columns: 3rem 1fr;
			gap: var(--space-sm);
			padding: var(--space-md) 0;
		}
	}
</style>
