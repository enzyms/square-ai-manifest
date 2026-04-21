<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ManifestItem from '$lib/components/ManifestItem.svelte';
	import ReorderModal from '$lib/components/ReorderModal.svelte';
	import { sortedManifest } from '$lib/stores/order';

	let reorderOpen = $state(false);
</script>

<svelte:head>
	<title>AI Manifesto — Liip</title>
	<meta name="description" content="Nine principles for responsible AI usage in the Square Team at Liip." />
</svelte:head>

<Header />

<main>
	<section class="hero">
		<div class="hero-inner">
			<h1>
				<span class="hero-bold">AI</span> Manifesto
			</h1>
			<span class="hero-accent"></span>
			<p class="hero-lead">These are our shared principles for integrating AI in the Square Team. It's about intention, responsibility and a healthy dose of critical thinking.</p>
		</div>
	</section>

	<section class="manifesto">
		<div class="manifesto-inner">
			{#each $sortedManifest as principle, idx (principle.id)}
				<ManifestItem {principle} number={idx + 1} />
			{/each}
			<div class="manifesto-footnote">
				<p class="footnote-text">Depending on our role, our project and our context, we may want to prioritize some principles over others.</p>
				<button class="footnote-button" onclick={() => reorderOpen = true}>Start to reorder.</button>
			</div>
		</div>
	</section>
</main>

<footer>
	<div class="footer-content">
		<p class="footer-text">Liip — Square Team — AI Manifesto v1.2 — {new Date().getFullYear()}</p>
	</div>
</footer>

<ReorderModal open={reorderOpen} onClose={() => reorderOpen = false} />

<style>
	footer {
		padding: var(--space-md);
		font-size: 0.875rem;
		color: var(--color-grey-500);
	}

	.footer-content {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	main {
		min-height: 100vh;
	}

	/* ---- Hero ---- */
	.hero {
		padding: var(--space-xl) var(--space-md) var(--space-lg);
	}

	.hero-inner {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.hero-label {
		font-size: var(--size-body);
		font-weight: var(--weight-regular);
		margin-bottom: var(--space-sm);
		color: var(--text-color);
	}

	h1 {
		font-size: var(--size-hero);
		font-weight: var(--weight-regular);
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.hero-bold {
		font-weight: var(--weight-black);
	}

	.hero-accent {
		display: block;
		width: 4rem;
		height: 6px;
		background: var(--highlight-color);
		margin-top: var(--space-md);
	}

	.hero-lead {
		max-width: 62rem;
		font-size: clamp(1.5rem, 2.5vw, 2.25rem);
		font-weight: var(--weight-thin);
		line-height: 1.3;
		color: var(--text-color);
		margin-top: var(--space-lg);
		padding-left: calc(5rem + var(--space-md));
	}

	@media (max-width: 640px) {
		.hero-lead {
			padding-left: calc(3rem + var(--space-sm));
		}
	}

	/* ---- Manifesto list ---- */
	.manifesto {
		padding: 0 var(--space-md) var(--space-lg);
	}

	.manifesto-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		border-top: 1px solid var(--text-color);
	}

	.manifesto-footnote {
		padding: var(--space-lg) 0 ;
		padding-left: calc(5rem + var(--space-md));
		font-size: var(--size-body);
		line-height: 1.75;
	}

	@media (max-width: 640px) {
		.manifesto-footnote {
			padding-left: calc(3rem + var(--space-sm));
		}
	}

	.footnote-button {
		display: inline-block;
		font-size: var(--size-body);
		font-weight: var(--weight-regular);
		color: var(--text-color);
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		text-decoration-line: underline;
		text-decoration-thickness: 1px;
		text-decoration-color: var(--highlight-color) !important;
		text-underline-offset: .25em;

		&:hover {
			text-decoration-thickness: 2px;
		}
	}
</style>
