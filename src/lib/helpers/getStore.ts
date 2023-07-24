import { get } from 'svelte/store';
import { initStore, store as atomicStore } from '@tomic/svelte';
import { Store } from '@tomic/lib';
import { currentSiteConfig } from '$lib/siteConfigs';

const init = () => {
	const serverUrl = new URL(currentSiteConfig.parentRoot);
	serverUrl.pathname = '/';

	const atomicStore = new Store({
		serverUrl: serverUrl.toString(),
	});
	initStore(atomicStore);
};

export const getStore = () => {
	let store = get(atomicStore);

	if (store === undefined) {
		init();
		store = get(atomicStore);
	}

	return store;
};
