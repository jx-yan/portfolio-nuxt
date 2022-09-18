import { Config } from "tailwindcss";

export default <Config>{
	theme: {
		extend: {},
	},
	plugins: [require("tailwindcss-dark-mode"), require('flowbite/plugin')],
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`App.{js,ts,vue}`,
		`app.{js,ts,vue}`,
	],
};
