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
		<div class="flex w-full">
			<!-- Featured News -->
			<NuxtLink
				to="/news"
				class="h-[40vw] shadow rounded-[1.2rem] w-2/3 p-5 xl:h-[750px] xl:mr-10 xl:p-8"
			>
				<p
					class="uppercase text-zinc-400 font-semibold text-[1.1vw] xl:text-lg"
				>
					{{ news[0].category[0] }} IN GENERAL
				</p>
				<div class="flex mt-3 h-1/2">
					<div class="h-full w-1/2">
						<img
							class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
							:src="news[0].image_url"
							alt=""
						/>
					</div>

					<h1
						class="font-bold w-1/2 ml-2 leading-[3.2vw] text-[2.8vw] xl:leading-[3.5rem] xl:text-[3.5rem] xl:text-text-6xl xl:ml-5"
					>
						{{ news[0].title }}
					</h1>
				</div>
				<div
					class="text-[#959595] h-1/2 flex flex-col justify-between texts font-bold text-[1.15vw] pt-10 pb-5 xl:text-2xl"
				>
					<p v-if="news[0].content" class="tracking-tighter">
						{{ news[0].description }}.<br />
						{{ news[0].content.slice(0, 400) }}...
					</p>
					<p v-else>{{ news[0].description }}</p>

					<p
						v-if="news[0].creator"
						class="tracking-tighter font-semibold pb-5"
					>
						By {{ news[0].creator[0] }} at
						{{ format(news[0].pubDate) }}
					</p>
					<p
						v-else-if="news[0].source_id"
						class="tracking-tighter font-semibold pb-5"
					>
						By {{ news[0].source_id }} at
						{{ format(news[0].pubDate) }}
					</p>
				</div>
			</NuxtLink>
			<!-- Second news -->
			<NuxtLink
				to="/news"
				class="ml-8 h-[40vw] shadow rounded-[1.2rem] w-1/3 p-5 xl:h-[750px] xl:p-8"
			>
				<p
					class="uppercase text-zinc-400 font-semibold text-[1.1vw] xl:text-base"
				>
					{{ news[1].category[0] }} IN GENERAL
				</p>

				<div
					class="text-[#959595] h-full flex flex-col justify-between texts font-bold leading-[1.3rem] text-[1.15vw] xl:text-xl"
				>
					<h1
						class="mt-3 font-bold text-black leading-[2.2vw] text-[2.2vw] xl:leading-[3.2rem] xl:text-[3rem]"
					>
						{{ news[1].title }}
					</h1>

					<p>{{ news[1].description }}</p>
					<div class="h-1/3 w-full">
						<img
							class="rounded-lg mr-2 object-cover w-full h-full xl:rounded-[15px]"
							:src="news[1].image_url"
							alt=""
						/>
					</div>
					<p
						v-if="news[1].creator"
						class="tracking-tighter font-semibold pb-5"
					>
						By {{ news[1].creator[0] }} at
						{{ format(news[1].pubDate) }}
					</p>
					<p
						v-else-if="news[1].source_id"
						class="tracking-tighter font-semibold pb-5"
					>
						By {{ news[1].source_id }} at
						{{ format(news[1].pubDate) }}
					</p>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
	.shadow {
		-webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.2);
	}
</style>
