<script lang="ts">
	import { constructArticleUrl } from '$lib/helpers/constructArticleUrl';
	import { currentSiteConfig } from '$lib/siteConfigs';
	import { urls } from '@tomic/lib';
	import { getResource, getValue } from '@tomic/svelte';
	import Icon from './ParentIcon.svelte';

	export let subject: string = currentSiteConfig.siteResource;

	$: resource = getResource(subject);
	$: title = getValue<string>(resource, urls.properties.name);
	$: shortenedTitle =
		$title && $title.length > 33 ? $title.slice(0, 30) + '...' : $title;
</script>

<a href={constructArticleUrl(subject)}>
	<Icon />
	{#if $resource.loading}
		Loading...
	{:else}
		{shortenedTitle}
	{/if}
</a>

<style>
	a {
		display: flex;
		align-items: center;
		color: var(--gray-6);
		padding: var(--size-2);
		text-decoration: none;
		border-radius: var(--t-radius);
		gap: var(--size-2);
		transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
	}
	a:hover,
	a:focus {
		background-color: var(--t-bg-body);
		color: var(--t-text);
	}

	a > :global(svg) {
		fill: var(--gray-7);
		transition: fill 0.1s ease-in-out;
	}

	a:hover > :global(svg),
	a:focus > :global(svg) {
		fill: var(--t-text);
	}
</style>
