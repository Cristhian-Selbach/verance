<script setup lang="ts">
	import dayjs from "dayjs";
	import localizedFormat from "dayjs/plugin/localizedFormat";

	function format(date: any) {
		dayjs.extend(localizedFormat);
		return dayjs(date).format("lll");
	}

	const props = defineProps({
		post: Object,
	});
</script>

<template>
	<NuxtLink
		target="_blank"
		:to="post.link"
		class="h-[40vw] shadow rounded-[1.2rem] w-full p-5 xl:h-[750px] xl:p-8 hover:scale-[1.01] ease-out duration-300"
	>
		<p
			class="uppercase text-zinc-400 font-semibold text-[1.1vw] xl:text-base"
		>
			{{ post.category[0] }} IN GENERAL
		</p>

		<div
			class="text-[#959595] h-full flex flex-col justify-between texts font-bold leading-[1.3rem] text-[1.15vw] xl:text-xl"
		>
			<h1
				v-if="post.title.length < 70"
				class="mt-3 font-bold text-black leading-[2.2vw] text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
			>
				{{ post.title }}
			</h1>
			<h1
				v-else
				class="mt-3 font-bold text-black leading-[2.2vw] text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
			>
				{{ post.title.slice(0, 70) }}...
			</h1>

			<p>{{ post.description.slice(0, 190) }}...</p>
			<div class="h-1/3 w-full">
				<img
					class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
					:src="post.image_url"
					alt=""
				/>
			</div>
			<p v-if="post.creator" class="tracking-tighter font-semibold pb-5">
				By {{ post.creator[0] }} at
				{{ format(post.pubDate) }}
			</p>
			<p
				v-else-if="post.source_id"
				class="tracking-tighter font-semibold pb-5"
			>
				By {{ post.source_id }} at
				{{ format(post.pubDate) }}
			</p>
		</div>
	</NuxtLink>
</template>
