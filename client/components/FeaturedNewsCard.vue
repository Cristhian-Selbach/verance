<script setup lang="ts">
	import { format } from "../utils/format";
	import { News } from "../pages/news.vue";

	const props = defineProps<{ news: News }>();
</script>

<template>
	<NuxtLink
		:to="news.link"
		target="_blank"
		class="h-[40vw] shadow rounded-[1.2rem] p-5 xl:h-[750px] xl:p-8 hover:scale-[1.01] ease-out duration-300"
	>
		<p
			class="uppercase text-zinc-400 font-semibold text-[1.1vw] xl:text-lg"
		>
			{{ news.category[0] }} IN GENERAL
		</p>
		<div class="flex mt-3 h-1/2">
			<div class="h-full w-1/2">
				<img
					class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
					:src="news.image_url"
					alt=""
				/>
			</div>

			<h1
				v-if="news.title.length < 70"
				class="font-bold w-1/2 ml-2 leading-[3vw] text-[2.8vw] xl:leading-[3.5rem] xl:text-[3.5rem] xl:text-text-6xl xl:ml-5"
			>
				{{ news.title }}
			</h1>
			<h1
				v-else
				class="font-bold w-1/2 ml-2 leading-[3.2vw] text-[2.8vw] xl:leading-[3.5rem] xl:text-[3.5rem] xl:text-text-6xl xl:ml-5"
			>
				{{ news.title.slice(0, 70) }}...
			</h1>
		</div>
		<div
			class="text-[#959595] h-1/2 flex flex-col justify-between texts font-bold text-[1.15vw] pt-10 pb-5 xl:text-2xl"
		>
			<p v-if="news.content" class="tracking-tighter">
				{{ news.description }}.<br />
				{{ news.content.slice(0, 300) }}...
			</p>
			<p v-else>{{ news.description }}</p>

			<p v-if="news.creator" class="tracking-tighter font-semibold pb-5">
				By {{ news.creator[0] }} at
				{{ format(news.pubDate) }}
			</p>
			<p
				v-else-if="news.source_id"
				class="tracking-tighter font-semibold pb-5"
			>
				By {{ news.source_id }} at
				{{ format(news.pubDate) }}
			</p>
		</div>
	</NuxtLink>
</template>
