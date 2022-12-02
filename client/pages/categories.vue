<template>
	<section
		class="flex flex-col items-center justify-center mt-16 mx-8 sm:mx-24 lg:mx-44 xl:h-[80vh]"
	>
		<h1 class="font-bold text-4xl">Choose Category</h1>
		<div
			class="flex flex-col md:flex-row items-center w-full mt-10 md:mt-20"
		>
			<a
				href="/science"
				class="mt-10 flex flex-col items-center w-[86vw] sm:w-[60vw] md:mt-0 md:w-1/2"
			>
				<h2 class="font-semibold text-3xl text-mediumGreen">science</h2>
				<img
					draggable="false"
					class="mt-5 hover:scale-110 transition-all duration-700 md:w-[70%]"
					src="~/assets/images/astronaut-suit-animate.svg"
				/>
			</a>

			<a
				href="/technology"
				class="mt-20 flex flex-col items-center w-[86vw] sm:w-[60vw] md:mt-0 md:w-1/2"
			>
				<h2 class="font-semibold text-3xl text-mediumGreen">
					technology
				</h2>
				<img
					draggable="false"
					class="mt-5 hover:scale-110 transition-all duration-700 md:w-[70%]"
					src="~/assets/images/virtual-reality-animate.svg"
				/>
			</a>
		</div>
	</section>
</template>
