<script setup lang="ts">
	import dayjs from "dayjs";
	import localizedFormat from "dayjs/plugin/localizedFormat";

	function format(date: any) {
		dayjs.extend(localizedFormat);
		return dayjs(date).format("lll");
	}

	let news: Array<any>;

	try {
		const { data } = await useFetch("http://localhost:8080/");
		news = data.value;
	} catch (e) {
		console.log("error");
	}
</script>

<template>
	<section class="mx-8 mt-20 sm:mx-24 lg:mx-44">
		<div class="featured-grid w-full">
			<!-- Featured News -->
			<FeaturedNewsCard :news="news[0]" />
			<!-- Second news -->
			<SecondNewsCard :news="news[1]" />
		</div>
		<div class="grid w-full">
			<NewsCard v-for="post in news.slice(2)" :post="post" />
		</div>
	</section>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
	}
	.featured-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 30px;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 30px;
	}
</style>
