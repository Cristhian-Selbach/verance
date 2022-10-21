/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		screens: {
			sm: "480px",
			md: "900px",
			lg: "1148px",
			xl: "1460px",
		},
		extend: {
			colors: {
				darkGreen: "#34A0A4",
				lightGreen: "#99D98C",
			},
		},
	},
	plugins: [],
};
