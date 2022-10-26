<template>
	<section class="flex items-center">
		<!-- Texts -->
		<div>
			<h1 class="font-bold text-[5.5rem] leading-[5rem]">
				Inside the main news.
			</h1>
			<p class="my-12 text-lg leading-6">
				At Verance you have access to the main news about science and
				technology. The news comes from the best journalists from the
				main USA media companies.
			</p>
			<div class="w-fit hover:scale-105 ease-out duration-300">
				<NuxtLink
					to="/"
					class="text-lg tracking-tight font-bold text-white bg-gradient-to-r from-lightGreen to-darkGreen rounded-lg px-8 py-2"
					>GET START
				</NuxtLink>
			</div>
		</div>

		<img class="" src="~/assets/images/blogging-animate.svg" />
	</section>
</template>

<style scoped>
	img {
		width: 55%;
		transform: translateX(10%);
	}
</style>
