<script lang="ts">
	import { constructArticleUrl } from '$lib/helpers/constructArticleUrl';
	import { urls } from '@tomic/lib';
	import { getResource, getValue } from '@tomic/svelte';
	import { domain } from '$lib/helpers/domainSubjects';
	import { markdownToPlainText } from '$lib/helpers/markdownToPlaintext';

	export let subject: string;
	let resource = getResource(subject);
	let name = getValue<string>(resource, urls.properties.name);
	let descriptionMD = getValue<string>(resource, urls.properties.description);
	let descriptionPlain = markdownToPlainText($descriptionMD || '');
	let descriptionTrimmed = `${descriptionPlain?.slice(0, 200)}${
		(descriptionPlain?.length ?? 0) > 200 ? '...' : ''
	}`;

	let cover = getValue<string>(resource, domain.coverImage);
	$: coverResource = $cover ? getResource($cover) : undefined;
	$: coverSrc = $cover
		? getValue<string>(coverResource!, urls.properties.file.downloadUrl)
		: undefined;

	let isCon = $resource.hasClasses(domain.conArgument);
	let isPro = $resource.hasClasses(domain.proArgument);
</script>

<a
	class="card"
	href={constructArticleUrl(subject)}
	class:pro={isPro}
	class:con={isCon}
>
	{#if coverSrc && $coverSrc}
		<img src={$coverSrc} alt="" class="image" loading="lazy" />
	{/if}
	<div class="inner">
		<h3 class:pro={isPro} class:con={isCon}>{$name}</h3>
		{#if !$coverSrc}
			{descriptionTrimmed || ''}
		{/if}
	</div>
</a>

<style>
	.card {
		--card-active-color: var(--t-color-main);
		display: flex;
		flex-direction: column;
		background-color: var(--t-bg);
		border-radius: var(--t-radius);
		height: var(--size-13);
		transition: transform 200ms var(--ease-elastic-1),
			box-shadow 200ms var(--ease-elastic-1);
		/* Prevent border radius on images */
		overflow: hidden;
	}
	.card:hover,
	.card:focus {
		box-shadow: 0 0 0 2px var(--card-active-color), var(--shadow-5);
		outline: none;
		transform: scale(1.05);
	}

	.card.pro {
		--card-active-color: var(--green-11);
		background-image: linear-gradient(45deg, var(--green-0), var(--t-bg));
	}

	.card.con {
		--card-active-color: var(--red-11);
		background-image: linear-gradient(45deg, var(--red-0), var(--t-bg));
	}

	.inner {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		overflow: hidden;
	}

	.image {
		height: 6rem;
		object-fit: cover;
		display: flex;
		flex: 1;
	}

	h3 {
		font-size: 1.2rem;
		color: var(--t-text-heading);
	}

	h3.pro {
		color: var(--green-11);
	}
	h3.con {
		color: var(--red-12);
	}
	.card :global(p) {
		font-size: 0.9rem;
	}
	.card :global(h2) {
		font-size: 1.2rem;
	}
</style>
