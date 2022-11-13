<script setup lang="ts">
	import dayjs from "dayjs";
	import localizedFormat from "dayjs/plugin/localizedFormat";

	function format(date: any) {
		dayjs.extend(localizedFormat);
		return dayjs(date).format("lll");
	}

	const { data } = await useFetch("http://localhost:8080/");
	const news = data._rawValue;

	const firstNews = news[0];
	const secondNews = news[1];
</script>

<template>
	<section class="mx-8 sm:mx-24 lg:mx-44">
		<div class="flex w-full">
			<NuxtLink to="/news" class="shadow rounded-[1.2rem] w-2/3 p-5">
				<p>Technology in General</p>
				<div class="flex">
					<img class="w-1/2" :src="firstNews.urlToImage" alt="" />
					<h1>{{ firstNews.title }}</h1>
				</div>
				<p>{{ firstNews.description }}</p>
				<p>{{ firstNews.content }}</p>
				<p v-if="news.author">
					By {{ firstNews.author }}
					{{ format(firstNews.publishedAt) }}
				</p>
				<p v-else>
					By {{ firstNews.source.name }}
					{{ format(firstNews.publishedAt) }}
				</p>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.1);
		-moz-box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.1);
		box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.1);
	}
</style>
