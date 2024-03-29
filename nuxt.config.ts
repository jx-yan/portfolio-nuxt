// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
	alias: {
		"@@": "/<rootDir>",
	},
});
