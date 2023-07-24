import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy';

const config: UserConfig = {
	plugins: [
		// legacy({
		// 	// targets: ['defaults', 'not IE 11'],
		// }),
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	server: {
		host: true,
		port: 5174,
	},
};

export default config;
