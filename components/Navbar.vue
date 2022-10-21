<template>
	<nav class="flex items-baseline mx-44 my-8">
		<!-- Logo -->
		<div class="w-1/2 select-none">
			<h1
				class="cursor-pointer w-fit p-0.5 text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-darkGreen"
			>
				VeranceNews.
			</h1>
		</div>

		<!-- Items -->
		<div
			class="w-1/2 font-bold text-[1.1rem] flex justify-between items-center"
		>
			<NuxtLink to="/"> HOME</NuxtLink>
			<NuxtLink to="/"> CATEGORIES </NuxtLink>
			<NuxtLink to="/"> ABOUT </NuxtLink>

			<!-- Navbar button -->
			<NuxtLink
				class="leading-3 bg-gradient-to-r from-lightGreen to-darkGreen tracking-tight text-white px-7 py-3 rounded-lg"
				to="/"
			>
				GET START
			</NuxtLink>
		</div>
	</nav>
</template>
