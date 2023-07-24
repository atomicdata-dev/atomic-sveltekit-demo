<script lang="ts">
	import { constructArticleUrl } from '$lib/helpers/constructArticleUrl';
	import { urls } from '@tomic/lib';
	import { getResource, getValue } from '@tomic/svelte';
	import NavLink from './NavLink.svelte';

	export let subject: string;

	const resource = getResource(subject);
	const name = getValue<string>(resource, urls.properties.name);

	let url = constructArticleUrl(subject);
</script>

<NavLink href={url}>
	{$name}
</NavLink>
