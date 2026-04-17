<script lang="ts">
	import { dark, toggleTheme } from '$lib/stores/theme';
</script>

<header>
	<div class="header-inner">
		<a href="/" class="logo" aria-label="Liip">
			<svg viewBox="0 0 199 72" width="83" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
				<path fill="currentColor" d="m125.352941.70588235 14.588235 7.05882353-32.705882 63.29411762-14.5882352-7.0588235zm-37.6470586 0 14.3529416 7.05882353-32.7058828 63.29411762-14.5882353-7.0588235zm78.8235296 45.17647055v23.0588236h-16.235294v-64.9411765h26.117647c14.588235 0 22.588235 10.3529412 22.588235 20.9411765 0 10.8235294-7.764706 20.9411764-22.588235 20.9411764zm0-27.5294117v13.1764706h9.17647c4.470589 0 7.058824-3.2941177 7.058824-6.5882353 0-3.2941177-2.588235-6.5882353-7.058824-6.5882353zm-166.11764729-14.3529412h16.23529409v50.8235294h27.7647059v14.1176471h-43.99999999z"/>
			</svg>
		</a>
		<div class="header-right">
			<p class="label">Square Team</p>
			<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle dark mode">
				{#if $dark}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
				{/if}
			</button>
		</div>
	</div>
</header>

<style>
	header {
		padding: var(--space-sm) var(--space-md);
		border-bottom: 1px solid var(--color-grey-100);
	}

	.header-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--color-grey-1000);
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.label {
		font-size: var(--size-sm);
		font-weight: var(--weight-regular);
		color: var(--color-grey-700);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: 1px solid var(--color-grey-100);
		border-radius: 50%;
		background: transparent;
		color: var(--color-grey-500);
		cursor: pointer;
		transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
	}

	.theme-toggle:hover {
		color: var(--highlight-color);
		border-color: var(--highlight-color);
	}
</style>
