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
			<NuxtLink
				to="/news"
				class="h-[530px] shadow rounded-[1.2rem] w-2/3 p-5"
			>
				<p class="uppercase text-zinc-400 font-semibold text-sm">
					{{ news[0].category[0] }} IN GENERAL
				</p>
				<div class="flex mt-3 h-1/2">
					<div class="h-full w-1/2">
						<img
							class="rounded-lg mr-2 object-cover w-full h-full"
							:src="news[0].image_url"
							alt=""
						/>
					</div>

					<h1
						class="font-bold w-1/2 text-[2.2rem] leading-[2.5rem] ml-2"
					>
						{{ news[0].title }}
					</h1>
				</div>
				<div
					class="text-[#959595] h-1/2 flex flex-col justify-around texts font-bold"
				>
					<p class="tracking-tighter">
						{{ news[0].description }}<br />
						{{ news[0].content.slice(0, 400) }}...
					</p>

					<p
						v-if="news[0].creator"
						class="tracking-tighter font-semibold"
					>
						By {{ news[0].creator[0] }} at
						{{ format(news[2].pubDate) }}
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
