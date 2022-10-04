import("tailwindcss").Config;

module.exports = {
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`App.{js,ts,vue}`,
		`app.{js,ts,vue}`,
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			serif: ["Sources Serif Pro", "serif"],
			mono: ["Fira mono", "monospace"],
		},
		container: {
			center: true,
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["night", "winter"],
	},
};
