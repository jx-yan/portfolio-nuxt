// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		[
			"@pinia/nuxt",
			{
				autoImports: [
					"defineStore"
				],
			},
		],
	],
	loading: {
		color: "blue",
		height: "5px",
	},
});