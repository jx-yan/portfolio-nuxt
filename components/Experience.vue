<script setup>
	var expDetailsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		expDetailsAll = res.data.value[0].expDetailsAll;
	});
</script>

<style>
	[data-theme="night"] #experience {
		background-image: linear-gradient(to bottom right, #0c496c, #46314b);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	[data-theme="winter"] #experience {
		background-image: linear-gradient(to top left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

<template>
	<section id="experience" class="m-0">
		<div class="grid grid-row-1 mx-auto justify-center">
			<div class="px-[4vw] -translate-x-8">
				<h2
					class="m-0 font-sans font-bold antialiased drop-shadow-2xl mt-16"
				>
					Experience
				</h2>
				<div class="flex flex-row md:gap-11 my-8 max-w-7xl">
					<div class="flex-none bg-base-100 shadow-2xl rounded-3xl mt-8 md:visible invisible w-0 h-0 md:w-4 md:h-auto"></div>
					<div class="m-0">
						<ExpCard
							v-for="expDetails in expDetailsAll"
							:expDetails="expDetails"
						></ExpCard>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
