<script setup lang="ts">
	import { format } from "../utils/format";
	import { News } from "../pages/news.vue";

	const props = defineProps<{ news: News }>();
</script>

<template>
	<NuxtLink
		target="_blank"
		:to="news.link"
		class="shadow rounded-[1.2rem] p-5 xl:p-8 hover:scale-[1.01] ease-out duration-300"
	>
		<p
			class="uppercase text-zinc-400 font-semibold md:text-[1.1vw] xl:text-base"
		>
			{{ news.category[0] }} IN GENERAL
		</p>

		<div
			class="justify-between text-[#959595] h-full flex flex-col texts font-bold text-sm md:leading-[1.5vw] md:text-[1.15vw] xl:text-xl"
		>
			<h1
				class="leading-[1.5rem] text-2xl mt-3 font-bold text-black md:leading-[2.2vw] md:text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
			>
				{{
					news.title.length > 70
						? `${news.title.slice(0, 70)}...`
						: news.title
				}}
			</h1>

			<p>{{ news.description.slice(0, 190) }}...</p>

			<div class="w-full h-1/3">
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
