<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import { resetSearch, searchResultList } from '$lib/components/Search/search';
	import SearchResults from '$lib/components/Search/SearchResults.svelte';
	import Backdrop from '$lib/components/Backdrop.svelte';
</script>

<div class="wrapper">
	<Header />
	<main inert={$searchResultList.length > 0 || undefined}>
		<slot />
	</main>
	{#if $searchResultList.length > 0}
		<Backdrop on:click={() => resetSearch()} />
	{/if}
	<SearchResults />
</div>

<style>
	@import url('$lib/reset.css');
	@import url('$lib/theme.css');

	.wrapper {
		color: var(--t-text);
	}
</style>
