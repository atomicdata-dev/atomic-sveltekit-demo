<script lang="ts" context="module">
	export const NO_RESULTS = 'NO_RESULTS';
	export const LOADING_SEARCH_RESULTS = 'LOADING_SEARCH_RESULTS';
</script>

<script lang="ts">
	import { debounced } from '$lib/helpers/debounced';

	import { currentSiteConfig } from '$lib/siteConfigs';

	import { buildSearchSubject, urls } from '@tomic/lib';
	import { getResource, getValue, store } from '@tomic/svelte';

	import { resetSearch, searchResultList, searchValue } from './search';
	import SearchIcon from './SearchIcon.svelte';

	let debouncedValue = debounced(searchValue, 1);

	$: searchSubject = buildSearchSubject($store, $debouncedValue, {
		scope: currentSiteConfig.siteResource,
		filters: {
			[urls.properties.isA]: 'https://atomicdata.dev/classes/Article',
		},
	});

	$: resource = getResource(searchSubject, { noWebSocket: true });
	$: results = getValue<string[]>(resource, urls.properties.endpoint.results);

	$: if ($debouncedValue === '') {
		resetSearch();
	} else {
		if (!$resource.loading) {
			const res = $results ?? [];
			$searchResultList = res.length > 0 ? res : [NO_RESULTS];
		} else if ($searchResultList.length === 0) {
			$searchResultList = [LOADING_SEARCH_RESULTS];
		}
	}
</script>

<div class="input-wrapper" class:white={true}>
	<SearchIcon />
	<input type="search" bind:value={$searchValue} placeholder="Search..." />
</div>

<style>
	.input-wrapper {
		border-radius: 5rem;
		border: none;
		padding: var(--size-1);
		padding-inline-start: var(--size-3);
		background-color: var(--t-color-main-light);
		color: white;
		display: flex;
		align-items: center;
		gap: 1ch;
	}

	.input-wrapper:focus-within {
		box-shadow: 0 0 0 0.1rem white;
	}

	input {
		border: none;
		background-color: transparent;
		color: white;
		width: 100%;
	}

	input::placeholder {
		color: white;
		opacity: 0.9;
	}

	input:focus {
		outline: none;
	}

	.white {
		background-color: white;
		color: var(--t-color-main);
		border: 1px solid var(--t-color-main);
	}

	.white input {
		color: var(--t-color-main);
	}

	.white:focus-within {
		box-shadow: 0 0 0 0.1rem var(--t-color-main);
	}

	.white input::placeholder {
		color: var(--t-color-main);
	}
</style>
