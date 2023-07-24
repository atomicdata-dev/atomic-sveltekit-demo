import { writable } from 'svelte/store';

export const searchResultList = writable<string[]>([]);
export const searchValue = writable('');

export const resetSearch = () => {
	searchResultList.set([]);
	searchValue.set('');
};
