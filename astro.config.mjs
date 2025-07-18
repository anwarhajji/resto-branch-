// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
	site: "https://branchelondon.co.uk/",
	base: "/",
	// trailingSlash: 'always',
	integrations: [
		tailwind(),
		sitemap() ,
		alpinejs(),
		mdx(),
		(await import("@playform/inline")).default({
			Critters: true,
		}),
	],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	experimental: {
		svg: true,
	},
});
