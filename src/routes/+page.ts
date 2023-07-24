import { currentSiteConfig } from '$lib/siteConfigs';
import { getStore } from '$lib/helpers/getStore';
import { getResource } from '@tomic/svelte';
import type { PageLoad } from './$types';
import { buildCollection } from '$lib/helpers/buildCollection';

export const load = (async ({ fetch }) => {
	const store = getStore();

	store.injectFetch(fetch);

	const subject = currentSiteConfig.homeUrl;
	const resource = getResource(subject);

	return {
		resource,
		childrenCollection: await buildCollection(subject),
	};
}) satisfies PageLoad;
