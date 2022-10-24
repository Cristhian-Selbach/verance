<template>
	<nav class="flex items-baseline mx-44 my-8">
		<!-- Logo -->
		<div class="w-1/2 select-none">
			<NuxtLink
				to="/"
				class="cursor-pointer w-fit p-0.5 text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-darkGreen"
			>
				VeranceNews.
			</NuxtLink>
		</div>

		<!-- Items -->
		<div
			class="w-1/2 font-bold text-[1.1rem] flex justify-between items-center"
		>
			<NuxtLink to="/" class="hover:text-stone-600"> HOME</NuxtLink>
			<NuxtLink to="/" class="hover:text-stone-600">CATEGORIES</NuxtLink>
			<NuxtLink to="/" class="hover:text-stone-600"> ABOUT </NuxtLink>

			<!-- Navbar button -->
			<NuxtLink
				class="whitespace-nowrap leading-3 bg-gradient-to-r from-lightGreen to-darkGreen tracking-tight text-white px-7 py-3 rounded-lg hover:scale-105 ease-out duration-300"
				to="/"
			>
				GET START
			</NuxtLink>
		</div>
	</nav>
</template>
