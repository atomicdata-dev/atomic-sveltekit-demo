<script>
	import Container from '$lib/components/Container.svelte';
</script>

<main>
	<Container>
		<p>Something went wrong. 😞</p>
	</Container>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100vh;
		height: 100dvh;
	}

	p {
		background-color: var(--t-bg);
		display: flex;
		align-content: center;
		justify-content: center;
		font-size: 2.5rem;
		color: var(--red-6);
		border-radius: var(--t-radius);
		box-shadow: var(--shadow-4);
		padding: 2rem;
		border: 2px solid var(--red-6);
	}
</style>
