<script lang="ts">
	import { scrollRatio } from '$lib/hooks/scrollRatio';
	import { urls } from '@tomic/lib';
	import { getResource, getValue } from '@tomic/svelte';
	import Container from './Container.svelte';

	export let coverSubject: string | undefined;
	export let small = false;

	$: coverResource = coverSubject ? getResource(coverSubject) : undefined;
	$: coverSrc = coverSubject
		? getValue<string>(coverResource!, urls.properties.file.downloadUrl)
		: undefined;
</script>

<div>
	<slot name="breadcrumbs" />
	{#if coverSrc && $coverSrc}
		<div class="nothing" style={`--image: url(${$coverSrc})`}>
			<div class="hero-image" use:scrollRatio={[-0.5, 1]} />
		</div>
	{:else}
		<div class="filler" />
	{/if}
	<Container>
		<div class="article" class:article--small={small}>
			<slot name="article" />
		</div>
	</Container>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	@import 'open-props/media';

	.hero-image {
		--blur: calc((1 - var(--ratio)) * 5px);
		opacity: var(--ratio, 1);
		filter: blur(var(--blur));
		background: var(--image);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: opacity 30ms;
		will-change: opacity filter;
		max-width: var(--size-xl);
		margin: auto;
		height: clamp(10rem, 50vw, 30rem);
	}

	.nothing {
		display: contents;
	}
	.filler {
		height: 10rem;
	}
	.article {
		position: relative;
		background-color: var(--t-bg);
		top: calc(-1 * clamp(1rem, 10vw, 5rem));
		box-shadow: var(--shadow-4);
		border-radius: var(--t-radius);
		width: 100%;
		padding: 1rem;
	}
	.article--small {
		width: min(35rem, 100%);
	}
	.content {
		margin-top: -3rem;
	}
</style>
