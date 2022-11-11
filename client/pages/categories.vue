<template>
	<section
		class="flex flex-col items-center justify-center mt-16 mx-8 sm:mx-24 lg:mx-44"
	>
		<h1 class="font-bold text-4xl">Choose Category</h1>
		<div class="flex w-full justify-between mt-20">
			<NuxtLink to="/" class="w-1/2 flex flex-col items-center">
				<h2 class="font-semibold text-3xl text-mediumGreen">science</h2>
				<img
					class="w-[70%] mt-5 hover:scale-110 transition-all duration-700"
					src="~/assets/images/astronaut-suit-animate.svg"
				/>
			</NuxtLink>

			<NuxtLink to="/" class="w-1/2 flex flex-col items-center">
				<h2 class="font-semibold text-3xl text-mediumGreen">
					technology
				</h2>
				<img
					class="w-[70%] mt-5 hover:scale-110 transition-all duration-700"
					src="~/assets/images/virtual-reality-animate.svg"
				/>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped></style>
