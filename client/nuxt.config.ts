// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	css: ["@/assets/css/main.css"],
	runtimeConfig: {
		public: {
			API_URL: process.env.NUXT_ENV_API_URL,
		},
	},
});
