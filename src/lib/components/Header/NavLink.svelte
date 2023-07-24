<script lang="ts">
	import { currentSiteConfig } from '$lib/siteConfigs';

	export let href: string;
	export let type: 'text' | 'image' = 'text';
	export let title: string | undefined = undefined;
</script>

<a
	{href}
	class:image={type === 'image'}
	{title}
	class:white-header={currentSiteConfig.whiteHeader}
>
	<slot />
</a>

<style>
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		height: var(--t-header-height);
		padding-inline: 0.5rem;

		transition: background-color 100ms ease-in-out, color 100ms ease-in-out,
			filter 100ms ease-in-out;
	}

	a.image {
		padding-inline: 0;
	}

	a:focus,
	a:hover {
		color: var(--t-color-main-text);
		text-decoration: underline;
		filter: brightness(0.9);
		background-color: var(--t-color-main);
	}

	.white-header:hover,
	.white-header:focus {
		background-color: rgba(0 0 0 / 0.06);
		color: var(--t-color-main);
	}
</style>
