<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ManifestItem from '$lib/components/ManifestItem.svelte';
	import { manifest } from '$lib/data/manifest';
</script>

<svelte:head>
	<title>AI Manifest — Liip</title>
	<meta name="description" content="10 principles for responsible AI usage at Liip." />
</svelte:head>

<Header />

<main>
	<section class="hero">
		<div class="hero-inner">
			<h1>
				<span class="hero-bold">AI</span> Manifest
			</h1>
			<span class="hero-accent"></span>
		</div>
	</section>

	<section class="manifest">
		<div class="manifest-inner">
			{#each manifest as principle (principle.number)}
				<ManifestItem {principle} />
			{/each}
		</div>
	</section>
</main>

<footer>
	<div class="footer-content">
		<p class="footer-text">Liip — Square Team — {new Date().getFullYear()}</p>
	</div>
</footer>

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
		width: 2rem;
		height: 4px;
		background: var(--highlight-color);
		margin-top: var(--space-md);
	}

	/* ---- Manifest list ---- */
	.manifest {
		padding: 0 var(--space-md) var(--space-lg);
	}

	.manifest-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		border-top: 1px solid var(--text-color);
	}
</style>
