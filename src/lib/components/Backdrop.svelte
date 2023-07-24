<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = 'auto';
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click transition:fade={{ duration: 200 }} />

<style>
	div {
		position: fixed;
		inset: 0;
		background-color: rgba(0 0 0 / 0.5);
		backdrop-filter: blur(5px);
		height: calc(100% - var(--t-header-height));
		margin-top: var(--t-header-height);
	}
</style>
