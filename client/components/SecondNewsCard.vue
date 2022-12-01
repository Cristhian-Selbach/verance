<script setup lang="ts">
	import { format } from "../utils/format";
	import { News } from "../pages/news.vue";

	const props = defineProps<{ news: News }>();
</script>
<template>
	<NuxtLink
		target="_blank"
		:to="news.link"
		class="h-[40vw] shadow rounded-[1.2rem] p-5 xl:h-[750px] xl:p-8 hover:scale-[1.01] ease-out duration-300"
	>
		<p
			class="uppercase text-zinc-400 font-semibold text-[1.1vw] xl:text-base"
		>
			{{ news.category[0] }} IN GENERAL
		</p>

		<div
			class="text-[#959595] h-full flex flex-col justify-between texts font-bold leading-[1.3rem] text-[1.15vw] xl:text-xl"
		>
			<h1
				v-if="news.title.length < 70"
				class="mt-3 font-bold text-black leading-[2.2vw] text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
			>
				{{ news.title }}
			</h1>
			<h1
				v-else
				class="mt-3 font-bold text-black leading-[2.2vw] text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
			>
				{{ news.title.slice(0, 70) }}...
			</h1>

			<p>{{ news.description.slice(0, 190) }}...</p>
			<div class="h-1/3 w-full">
				<img
					class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
					:src="news.image_url"
					alt=""
				/>
			</div>
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
