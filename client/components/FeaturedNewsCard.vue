<script setup lang="ts">
	import { format } from "../utils/format";
	import { News } from "../pages/news.vue";

	const { news } = defineProps<{ news: News }>();

	const uniqueDescription =
		news.content?.toLowerCase() !== news.description?.toLowerCase()
			? `${news.description} ${news.content || ""}`
			: news.description;

	const slicedDescription =
		uniqueDescription.length > 500
			? `${uniqueDescription.slice(0, 500)}...`
			: uniqueDescription;
</script>

<template>
	<NuxtLink
		:to="news.link"
		target="_blank"
		class="shadow rounded-[1.2rem] p-5 hover:scale-[1.01] ease-out duration-300 flex flex-col"
	>
		<p
			class="uppercase text-zinc-400 font-semibold md:text-[1.1vw] xl:text-lg"
		>
			{{ news.category[0] }} IN GENERAL
		</p>

		<div class="block sm:flex mt-3 space-y-3 mb-3">
			<div class="sm:w-1/2">
				<img
					class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
					:src="news.image_url"
					alt=""
				/>
			</div>

			<h1
				class="mt-3 sm:mt-0 font-bold sm:w-1/2 leading-[2.2rem] text-[2rem] md:leading-[3vw] md:text-[2.8vw] xl:leading-[3.5rem] xl:text-[3.5rem] xl:text-text-6xl sm:ml-3 xm:ml-5"
			>
				{{
					news.title.length > 70
						? `${news.title.slice(0, 70)}...`
						: news.title
				}}
			</h1>
		</div>

		<div
			class="flex-1 text-[#959595] text-base flex flex-col justify-between texts font-bold md:text-[1.15vw] sm:pt-5 xl:text-2xl"
		>
			<p class="leading-normal mb-5">
				{{ slicedDescription }}
			</p>

			<p v-if="news.creator" class="tracking-tighter font-semibold">
				By {{ news.creator[0] }} at
				{{ format(news.pubDate) }}
			</p>

			<p
				v-else-if="news.source_id"
				class="tracking-tighter font-semibold"
			>
				By {{ news.source_id }} at
				{{ format(news.pubDate) }}
			</p>
		</div>
	</NuxtLink>
</template>
