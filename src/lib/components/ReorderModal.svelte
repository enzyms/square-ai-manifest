<script lang="ts">
	import { manifest } from '$lib/data/manifest';
	import { order, saveOrder, resetOrder } from '$lib/stores/order';
	import { get } from 'svelte/store';

	let { open, onClose }: { open: boolean; onClose: () => void } = $props();

	let items = $state<string[]>([]);
	let dragIdx = $state<number | null>(null);
	let overIdx = $state<number | null>(null);

	$effect(() => {
		if (open) {
			items = [...get(order)];
		}
	});

	function getTitle(id: string) {
		const p = manifest.find((m) => m.id === id);
		if (!p) return '';
		return `${p.headline.bold} ${p.headline.rest}`;
	}

	function handleDragStart(idx: number) {
		dragIdx = idx;
	}

	function handleDragOver(e: DragEvent, idx: number) {
		e.preventDefault();
		if (dragIdx === null || dragIdx === idx) return;
		overIdx = idx;
		const reordered = [...items];
		const [moved] = reordered.splice(dragIdx, 1);
		reordered.splice(idx, 0, moved);
		items = reordered;
		dragIdx = idx;
	}

	function handleDragEnd() {
		dragIdx = null;
		overIdx = null;
	}

	function handleSave() {
		saveOrder(items);
		onClose();
	}

	function handleReset() {
		resetOrder();
		onClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onClose();
	}

	function handleBackdropClick(e: MouseEvent) {
		if ((e.target as HTMLElement).classList.contains('backdrop')) {
			onClose();
		}
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="backdrop"
		role="dialog"
		aria-modal="true"
		aria-label="Reorder principles"
		tabindex="-1"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
	>
		<div class="modal">
			<div class="modal-header">
				<h3>Reorder principles</h3>
				<button class="close-btn" onclick={onClose} aria-label="Close">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
				</button>
			</div>

			<ul class="sortable-list">
				{#each items as id, idx (id)}
					<li
						class="sortable-item"
						class:dragging={dragIdx === idx}
						class:dragover={overIdx === idx}
						draggable="true"
						ondragstart={() => handleDragStart(idx)}
						ondragover={(e) => handleDragOver(e, idx)}
						ondragend={handleDragEnd}
						role="listitem"
					>
						<span class="drag-handle" aria-hidden="true">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>
						</span>
						<span class="item-number">{String(idx + 1).padStart(2, '0')}</span>
						<span class="item-title">{getTitle(id)}</span>
					</li>
				{/each}
			</ul>

			<div class="modal-actions">
				<button class="btn btn-reset" onclick={handleReset}>Reset to default</button>
				<button class="btn btn-save" onclick={handleSave}>Save order</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-md);
		animation: fadeIn 0.2s var(--ease);
	}

	.modal {
		background: var(--bg-color);
		border: 1px solid var(--color-grey-100);
		border-radius: 0.5rem;
		width: 100%;
		max-width: 28rem;
		max-height: 85vh;
		overflow-y: auto;
		animation: slideUp 0.25s var(--ease);
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-md);
		border-bottom: 1px solid var(--color-grey-100);
	}

	.modal-header h3 {
		font-size: var(--size-body);
		font-weight: var(--weight-bold);
		color: var(--text-color);
	}

	.close-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: var(--color-grey-500);
		cursor: pointer;
		padding: 0.25rem;
		border-radius: 0.25rem;
		transition: color 0.15s var(--ease);
	}

	.close-btn:hover {
		color: var(--text-color);
	}

	.sortable-list {
		list-style: none;
		padding: var(--space-xs) 0;
	}

	.sortable-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.625rem var(--space-md);
		border-top: 1px solid transparent;
		cursor: grab;
		transition: background-color 0.15s var(--ease);
		user-select: none;
	}

	.sortable-item:hover {
		background: var(--color-grey-100);
	}

	.sortable-item.dragging {
		opacity: 0.4;
	}

	.sortable-item.dragover {
		border-top: 1px solid var(--highlight-color);
	}

	.drag-handle {
		color: var(--color-grey-500);
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.item-number {
		font-size: var(--size-sm);
		font-weight: var(--weight-bold);
		color: var(--highlight-color);
		flex-shrink: 0;
		width: 1.5rem;
	}

	.item-title {
		font-size: var(--size-body);
		font-weight: var(--weight-regular);
		color: var(--text-color);
	}

	.modal-actions {
		display: flex;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-md);
		border-top: 1px solid var(--color-grey-100);
	}

	.btn {
		font-family: var(--font-family);
		font-size: var(--size-sm);
		font-weight: var(--weight-bold);
		padding: 0.5rem 1rem;
		border-radius: 2.5rem;
		cursor: pointer;
		transition: all 0.15s var(--ease);
	}

	.btn-reset {
		background: none;
		border: 1px solid var(--text-color);
		color: var(--text-color);
	}

	.btn-reset:hover {
		border-color: var(--highlight-color);
		color: var(--text-color);
		background: var(--highlight-color);
		color: var(--color-grey-0);
	}

	.btn-save {
		background: var(--highlight-color);
		border: 1px solid var(--highlight-color);
		color: var(--color-grey-0);
	}

	.btn-save:hover {
		opacity: 0.85;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slideUp {
		from { transform: translateY(1rem); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
	}
</style>
