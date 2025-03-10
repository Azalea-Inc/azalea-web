import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess"

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
		    base: dev ? "" : "/azalea-web",
		    
		},
		prerender: {
		    entries: ["*"],
		},
	},

    preprocess: [mdsvex(), preprocess({postcss: true})],
    extensions: [".svelte", ".svx"]
};

export default config;
