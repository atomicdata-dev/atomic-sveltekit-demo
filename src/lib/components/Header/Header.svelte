<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { domain } from '$lib/helpers/domainSubjects';
	import { currentSiteConfig } from '$lib/siteConfigs';
	import { properties } from '@tomic/lib/dist/src/urls';
	import { getResource, getValue } from '@tomic/svelte';
	import { fly } from 'svelte/transition';
	import Backdrop from '../Backdrop.svelte';
	import Container from '../Container.svelte';
	import IconButton from '../IconButton.svelte';
	import Hamburger from '../Icons/Hamburger.svelte';
	import Searchbar from '../Search/Searchbar.svelte';
	import NavLink from './NavLink.svelte';
	import ResourceNavLink from './ResourceNavLink.svelte';
	import { useVisible } from '../../hooks/useVisible';

	let showHamburger = false;
	let sideNavOpen = false;
	let navElement: HTMLElement;

	$: resource = getResource(currentSiteConfig.siteResource);
	$: pages = getValue<string[]>(resource, domain.pages);
	$: image = getValue<string>(resource, domain.siteImage);
	$: name = getValue<string>(resource, properties.name);

	const onItemWrapChange = (isVisible: boolean) => {
		showHamburger = !isVisible;
		if (isVisible) sideNavOpen = false;
	};

	afterNavigate(() => {
		sideNavOpen = false;
	});

	const handleBodyKeyUp = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			sideNavOpen = false;
		}
	};
</script>

<svelte:body on:keyup={handleBodyKeyUp} />
<header>
	<Container>
		<nav bind:this={navElement}>
			<ul>
				<li>
					<NavLink href="/" type="image" title="Homepagina">
						{#if $image}
							<img src={$image} alt={`${$name} logo`} class="logo" />
						{:else}
							{$name}
						{/if}
					</NavLink>
				</li>
				{#each $pages ?? [] as page, index (page)}
					{#if index === ($pages ?? []).length - 1}
						<li
							use:useVisible={{
								root: navElement,
								onVisibleChange: onItemWrapChange,
							}}
						>
							<ResourceNavLink subject={page} />
						</li>
					{:else}
						<li>
							<ResourceNavLink subject={page} />
						</li>
					{/if}
				{/each}
			</ul>
			<span class="search-wrapper">
				<Searchbar />
				{#if showHamburger}
					<IconButton
						title="Website menu"
						ariaControls="site-sidenav"
						on:click={() => (sideNavOpen = !sideNavOpen)}
					>
						<Hamburger />
					</IconButton>
				{/if}
			</span>
		</nav>
	</Container>
	{#if showHamburger && sideNavOpen}
		<div class="side-nav" id="site-sidenav">
			<Backdrop on:click={() => (sideNavOpen = false)} />
			<nav
				aria-label="Side navigation"
				transition:fly={{ x: 1000, duration: 200 }}
			>
				<ul>
					{#each $pages ?? [] as page}
						<li>
							<ResourceNavLink subject={page} />
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{/if}
</header>

<style>
	header {
		height: var(--t-header-height);
		position: fixed;
		width: 100%;
		z-index: 100;
		background-color: white;
		color: var(--t-color-main);
		box-shadow: var(--shadow-3);
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
		height: var(--t-header-height);
	}
	.logo {
		height: 100%;
		width: auto;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-self: flex-start;
		margin: 0;
		flex: 1;
		height: calc(var(--t-header-height) * 2);
		flex-wrap: wrap;
	}

	.search-wrapper {
		width: var(--size-fluid-8);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: var(--size-1);
	}
	.side-nav {
		position: fixed;
		height: 100%;
		width: 100%;
		color: var(--t-color-main);
	}

	.side-nav nav {
		position: absolute;
		right: 0;
		background-color: var(--t-bg);
		overflow-y: auto;
		box-shadow: var(--shadow-5);
		height: 100%;
		width: 70%;
	}
	.side-nav li {
		width: 100%;
	}
</style>
