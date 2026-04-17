import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function getInitialTheme(): boolean {
	if (!browser) return false;
	const stored = localStorage.getItem('theme');
	if (stored) return stored === 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const dark = writable(getInitialTheme());

if (browser) {
	dark.subscribe((value) => {
		const root = document.documentElement;
		root.classList.toggle('dark', value);
		root.classList.toggle('light', !value);
		localStorage.setItem('theme', value ? 'dark' : 'light');
	});
}

export function toggleTheme() {
	dark.update((d) => !d);
}
