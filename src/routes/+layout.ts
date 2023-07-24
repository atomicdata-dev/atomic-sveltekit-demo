import { currentSiteConfig } from './../lib/siteConfigs';
import type { LayoutLoad } from './$types';
import { getStore } from '$lib/helpers/getStore';
import { domain } from '$lib/helpers/domainSubjects';

// Used for static rendering
export const prerender = true;

export const load = (async () => {
	const store = getStore();

	try {
		const site = await store.getResourceAsync(currentSiteConfig.siteResource);
		const color = site.get(domain.color) || 'red';
		return { color };
	} catch (e) {
		console.error(
			'Could not load site config for ',
			currentSiteConfig.siteResource,
			e,
		);
		return { color: 'red' };
	}
}) satisfies LayoutLoad;
