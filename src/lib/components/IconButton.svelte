<script lang="ts">
	export let title: string;
	export let ariaControls: string | undefined = undefined;
</script>

<button {title} on:click aria-controls={ariaControls}>
	<slot />
</button>

<style>
	button {
		appearance: none;
		background-color: transparent;
		border: none;
		display: grid;
		place-items: center;
		padding: var(--size-2);
		color: currentColor;
		cursor: pointer;
		border-radius: var(--t-radius);
		transition: background-color 100ms ease-in-out;
	}

	button:hover,
	button:focus {
		background-color: rgba(0 0 0 / 0.1);
	}
</style>
