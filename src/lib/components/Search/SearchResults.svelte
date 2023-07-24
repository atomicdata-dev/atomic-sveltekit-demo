<script lang="ts">
	import { fly } from 'svelte/transition';
	import ArticleCard from '../ArticleCard.svelte';
	import Container from '../Container.svelte';
	import { NO_RESULTS, LOADING_SEARCH_RESULTS } from './Searchbar.svelte';
	import { resetSearch, searchResultList } from './search';
	import { afterNavigate } from '$app/navigation';
	import CardLoading from '../CardLoading.svelte';

	const onKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			resetSearch();
		}
	};

	afterNavigate(() => resetSearch());
</script>

<svelte:body on:keydown={onKeyPress} />

{#if $searchResultList.length > 0}
	<section
		aria-labelledby="result-heading"
		class="wrapper"
		transition:fly={{ y: 1000, duration: 200 }}
	>
		<div class="scroll-container">
			<Container>
				<h2 id="result-heading">Resultaten</h2>
				<ol class="list">
					{#if $searchResultList[0] === LOADING_SEARCH_RESULTS}
						{#each Array(9) as _, i}
							<CardLoading --animation-delay={`${i * 150}ms`} />
						{/each}
					{:else}
						{#each $searchResultList as result (result)}
							<li>
								{#if result === NO_RESULTS}
									<span>Geen Resultaten</span>
								{:else}
									<ArticleCard subject={result} />
								{/if}
							</li>
						{/each}
					{/if}
				</ol>
			</Container>
		</div>
	</section>
{/if}

<style>
	@import 'open-props/media';

	h2 {
		margin-bottom: var(--size-3);
	}
	.wrapper {
		position: fixed;
		background-color: var(--t-bg-body);
		left: var(--size-3);
		right: var(--size-3);
		bottom: 0;
		top: 10rem;
		height: calc(100vh - 10rem);
		padding-block: var(--size-6);
		box-shadow: var(--shadow-6);
		border-top-right-radius: var(--radius-4);
		border-top-left-radius: var(--radius-4);
	}

	.scroll-container {
		overflow: auto;
		height: 100%;
	}
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: var(--size-3);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0;
		padding: 0;
	}

	@media (--sm-n-below) {
		.list {
			grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		}

		.wrapper {
			left: 0;
			right: 0;
		}
	}
</style>
