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
			sm: "520px",
			md: "1000px",
			lg: "1200px",
			xl: "1800px",
		},
		extend: {
			colors: {
				darkGreen: "#34A0A4",
				lightGreen: "#99D98C",
				mediumGreen: "#63BD97",
			},
		},
	},
	plugins: [],
};
