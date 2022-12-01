<script setup lang="ts">
	import dayjs from "dayjs";
	import localizedFormat from "dayjs/plugin/localizedFormat";

	export interface News {
		title: string;
		description: string;
		content: string | null;
		image_url: string;
		link: string;
		source_id: string;
		category: string[];
		creator: string[] | null;
		pubDate: string;
	}

	function format(date: any) {
		dayjs.extend(localizedFormat);
		return dayjs(date).format("lll");
	}

	let news: Array<News>;
	let load = false;
	try {
		const { data } = await useFetch<News[]>("http://localhost:8080/");
		news = data.value!;
		load = true;
	} catch (e) {
		console.log("error");
	}
</script>

<template>
	<section
		v-if="load"
		class="grid grid-cols-3 gap-[30px] mx-8 mt-20 sm:mx-24 lg:mx-44"
	>
		<FeaturedNewsCard class="col-span-2" :news="news[0]" />
		<SecondNewsCard :news="news[1]" />
		<NewsCard v-for="post in news.slice(2)" :post="post" />
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
