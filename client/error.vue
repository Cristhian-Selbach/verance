<template>
	<Navbar />
	<section
		class="flex flex-col items-center justify-center mt-16 mx-8 sm:mx-24 lg:mx-44 xl:h-[80vh]"
	>
		<img
			draggable="false"
			class="mt-5 md:w-[50%]"
			src="~/assets/images/404-error-animate.svg"
		/>
		<h1 class="mt-10 font-bold text-3xl">Page not found.</h1>
		<p
			class="text-lg mb-10 font-semibold text-center text-zinc-500 md:w-1/2"
		>
			the page you are looking for cannot be found on our server
		</p>
		<a
			class="font-bold whitespace-nowrap bg-gradient-to-r from-lightGreen to-darkGreen tracking-tight text-white px-7 py-1.5 rounded-lg hover:scale-105 ease-out duration-300"
			href="/"
		>
			MAIN PAGE
		</a>
	</section>
</template>
