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
		container: {
			center: true,
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			serif: ["Sources Serif Pro", "serif"],
			mono: ["Fira mono", "monospace"],
		},
		screens: {
			phone: "420px",
			// => @media (min-width: 640px) { ... }

			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["night", "winter"],
	},
};
