// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// import adapterGhpages from "svelte-adapter-ghpages";
import adapterNetlify from '@sveltejs/adapter-netlify';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter: adapterGhpages({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: '404.html',
		// 	precompress: false,
		// 	strict: true
		// }),
		adapter: adapterNetlify({
			// Using edge is faster, but does not support node stuff
			// edge: true,
		}),
		prerender: {
			crawl: true,
			entries: ['/'],
			// Replace this when deploying
			// origin: 'https://wonenatthepark.nl',
			origin: 'http://localhost:4174',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'app',
	},
};

export default config;
