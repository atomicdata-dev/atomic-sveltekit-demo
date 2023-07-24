<script lang="ts">
	export let center = true;
</script>

<div class:center>
	<slot />
</div>

<style>
	div {
		width: min(70ch, 100%);
	}

	.center {
		margin: auto;
	}
</style>
