// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/content"
	],
	loading: {
		color: "blue",
		height: "5px",
	}
});
