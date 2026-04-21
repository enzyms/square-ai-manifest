import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { manifest } from '$lib/data/manifest';

const STORAGE_KEY = 'manifesto-order';
const LEGACY_STORAGE_KEY = 'manifest-order';

function parseOrder(raw: string | null): string[] | null {
	if (!raw) return null;
	try {
		const parsed = JSON.parse(raw);
		if (
			Array.isArray(parsed) &&
			parsed.length === manifest.length &&
			parsed.every((id: unknown) => typeof id === 'string')
		) {
			return parsed;
		}
	} catch {
		// ignore
	}
	return null;
}

function getStoredOrder(): string[] | null {
	if (!browser) return null;
	return (
		parseOrder(localStorage.getItem(STORAGE_KEY)) ??
		parseOrder(localStorage.getItem(LEGACY_STORAGE_KEY))
	);
}

const defaultOrder = manifest.map((p) => p.id);

export const order = writable<string[]>(getStoredOrder() ?? defaultOrder);

export const sortedManifest = derived(order, ($order) => {
	const lookup = new Map(manifest.map((p) => [p.id, p]));
	return $order.map((id) => lookup.get(id)!);
});

export function saveOrder(ids: string[]) {
	order.set(ids);
	if (browser) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
		localStorage.removeItem(LEGACY_STORAGE_KEY);
	}
}

export function resetOrder() {
	order.set(defaultOrder);
	if (browser) {
		localStorage.removeItem(STORAGE_KEY);
		localStorage.removeItem(LEGACY_STORAGE_KEY);
	}
}
