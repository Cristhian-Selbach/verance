<script lang="ts" setup>
	const btn = ref(null);
	const nav = ref(null);

	function toggle() {
		btn.value.classList.toggle("open");
		nav.value.classList.toggle("flex");
		nav.value.classList.toggle("hidden");
	}
</script>

<template>
	<nav
		class="flex items-baseline justify-between my-8 mx-8 sm:mx-24 lg:mx-44"
	>
		<!-- Logo -->
		<div class="select-none">
			<NuxtLink
				to="/"
				class="cursor-pointer w-fit p-0.5 text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightGreen to-darkGreen"
			>
				VeranceNews.
			</NuxtLink>
		</div>

		<!-- Items -->
		<div
			class="hidden font-bold text-[1.1rem] items-center space-x-16 md:flex"
		>
			<NuxtLink to="/" class="hover:text-stone-600"> HOME</NuxtLink>
			<NuxtLink to="/" class="hover:text-stone-600">CATEGORIES</NuxtLink>
			<NuxtLink to="/" class="hover:text-stone-600"> ABOUT </NuxtLink>

			<!-- Navbar button -->
			<NuxtLink
				class="whitespace-nowrap bg-gradient-to-r from-lightGreen to-darkGreen tracking-tight text-white px-7 py-1.5 rounded-lg hover:scale-105 ease-out duration-300"
				to="/"
			>
				GET START
			</NuxtLink>
		</div>

		<!-- Toggle button -->
		<button
			ref="btn"
			@click="toggle"
			class="py-4 block hamburger md:hidden focus:outline-none"
		>
			<span class="hamburger-top"></span>
			<span class="hamburger-middle"></span>
			<span class="hamburger-bottom"></span>
		</button>
	</nav>

	<!-- Nav on Mobile -->
	<div class="md:hidden">
		<div
			ref="nav"
			class="absolute flex-col font-semibold items-center hidden self-end py-8 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
		>
			<NuxtLink to="/">HOME</NuxtLink>
			<NuxtLink to="/">CATEGORIES</NuxtLink>
			<NuxtLink to="/">ABOUT</NuxtLink>
			<NuxtLink to="/">GET START</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
	.hamburger {
		cursor: pointer;
		width: 24px;
		height: 24px;
		transition: all 0.25s;
		position: relative;
	}
	.hamburger-top,
	.hamburger-middle,
	.hamburger-bottom {
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 2px;
		background-color: #000;
		transform: rotate(0);
		transition: all 0.5s;
	}
	.hamburger-middle {
		transform: translateY(7px);
	}
	.hamburger-bottom {
		transform: translateY(14px);
	}
	.open {
		transform: rotate(90deg);
		transform: translateY(0px);
	}
	.open .hamburger-top {
		transform: rotate(45deg) translateY(6px) translate(6px);
	}
	.open .hamburger-middle {
		display: none;
	}
	.open .hamburger-bottom {
		transform: rotate(-45deg) translateY(6px) translate(-6px);
	}
</style>
