<script setup lang="ts">
	import { News } from "../pages/news.vue";

	let news: Array<News>;
	let load = false;

	const config = useRuntimeConfig();

	try {
		const { data } = await useFetch<News[]>(
			config.public.API_URL + "?category=sciece"
		);
		news = data.value!;
		load = true;
	} catch (e) {
		console.log("error", e);
	}
</script>

<template>
	<section
		v-if="load"
		class="grid sm:grid-cols-2 md:grid-cols-3 mx-8 mt-20 sm:mx-24 gap-[10px] md:gap-[30px] lg:mx-44 xl:gap-[3vw]"
	>
		<FeaturedNewsCard class="sm:col-span-2" :news="news[0]" />
		<NewsCard v-for="post in news.slice(1)" :news="post" />
	</section>
	<section v-else class="w-full h-[70vh] flex justify-center items-center">
		<img
			class="m-0"
			src="https://gifimage.net/wp-content/uploads/2018/04/loading-spinner-animated-gif-5.gif"
			alt=""
		/>
	</section>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
	}
</style>
