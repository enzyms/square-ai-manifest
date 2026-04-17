<script lang="ts">
	import '$lib/stores/theme';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root),
	:global(.light) {
		--color-brand: hsl(75.4, 100%, 45.9%);
		--color-brand-dark: hsl(110.6, 100%, 31.2%);

		--locked-color-grey-0: hsl(0, 0%, 100%);
		--locked-color-grey-50: hsl(0, 0%, 98%);
		--locked-color-grey-100: hsl(0, 0%, 93.3%);
		--locked-color-grey-500: hsl(0, 0%, 50%);
		--locked-color-grey-700: hsl(0, 0%, 33.3%);
		--locked-color-grey-900: hsl(0, 0%, 13.3%);
		--locked-color-grey-1000: hsl(0, 0%, 0%);

		--color-grey-0: var(--locked-color-grey-0);
		--color-grey-50: var(--locked-color-grey-50);
		--color-grey-100: var(--locked-color-grey-100);
		--color-grey-500: var(--locked-color-grey-500);
		--color-grey-700: var(--locked-color-grey-700);
		--color-grey-900: var(--locked-color-grey-900);
		--color-grey-1000: var(--locked-color-grey-1000);

		--color-danger: hsl(357, 76%, 49%);
		--color-success: var(--highlight-color);
		--bg-color: var(--color-grey-50);
		--text-color: var(--locked-color-grey-900);
		--border-color: var(--locked-color-grey-500);
		--highlight-color: var(--color-brand-dark);
		--ease: cubic-bezier(0.2, 0.77, 0.28, 1);

		--font-family: 'Archivo', sans-serif;

		--weight-thin: 100;
		--weight-light: 300;
		--weight-regular: 400;
		--weight-bold: 700;
		--weight-black: 900;

		--size-number: clamp(1rem, 1.2vw, 1.25rem);
		--size-body: clamp(1rem, 1.2vw, 1.25rem);
		--size-headline: clamp(1.75rem, 3.5vw, 3rem);
		--size-hero: clamp(2.5rem, 5vw, 4.5rem);
		--size-sub: clamp(1rem, 1.2vw, 1.25rem);
		--size-sm: clamp(0.875rem, 1.2vw, 1rem);

		--space-xs: 0.4rem;
		--space-sm: 1rem;
		--space-md: 2rem;
		--space-lg: clamp(1.75rem, 3.5vw, 3.5rem);
		--space-xl: clamp(2.5rem, 5vw, 4.5rem);

		--max-width: 72rem;
	}

	:global(.dark) {
		--color-grey-0: var(--locked-color-grey-1000);
		--color-grey-50: var(--locked-color-grey-900);
		--color-grey-100: var(--locked-color-grey-700);
		--color-grey-700: var(--locked-color-grey-100);
		--color-grey-900: var(--locked-color-grey-50);
		--color-grey-1000: var(--locked-color-grey-0);
		--color-danger: hsl(357, 80%, 65%);
		--text-color: var(--locked-color-grey-50);
		--border-color: var(--locked-color-grey-700);
		--highlight-color: var(--color-brand);
	}

	:global(.light),
	:global(.dark) {
		color: var(--text-color);
	}

	:global(html) {
		font-family: var(--font-family);
		font-weight: var(--weight-regular);
		color: var(--text-color);
		background: var(--bg-color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition: background-color 0.3s var(--ease), color 0.3s var(--ease);
	}

	:global(body) {
		line-height: 1.5;
	}
</style>
