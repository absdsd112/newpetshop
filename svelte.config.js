import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		base: process.env.NODE_ENV === 'production' ? '/newpetshop/' : ''
	},
	preprocess: vitePreprocess()
};

export default config;
