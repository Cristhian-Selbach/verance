<template>
	<section class="flex items-center mt-24 md:mt-10">
		<!-- Texts -->
		<div
			class="text-center flex flex-col items-center md:text-left md:block"
		>
			<h1
				class="font-bold text-7xl leading-[4rem] sm:leading-[5rem] sm:text-[6rem] xl:text-[7rem] xl:leading-[6rem]"
			>
				Inside the main news.
			</h1>
			<p class="my-12 text-lg leading-6">
				At Verance you have access to the main news about science and
				technology. The news comes from the best journalists from the
				main USA media companies.
			</p>
			<div
				class="mb-10 w-fit hover:scale-105 ease-out duration-300 sm:mb-0"
			>
				<NuxtLink
					to="/"
					class="text-lg tracking-tight font-bold text-white bg-gradient-to-r from-lightGreen to-darkGreen rounded-lg px-8 py-2"
					>GET START
				</NuxtLink>
			</div>
		</div>

		<img
			class="hidden md:block"
			src="~/assets/images/blogging-animate.svg"
		/>
	</section>
</template>

<style scoped>
	img {
		width: 54%;
		transform: translateX(10%);
	}
</style>
