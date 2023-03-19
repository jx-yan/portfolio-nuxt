<script setup>
	var expDetailsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		expDetailsAll = res.data.value[0].expDetailsAll;
	});
</script>

<style>
	/* [data-theme="winter"] #experience {
		background-image: linear-gradient(to top left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	} */
</style>

<template>
	<section id="experience" class="m-0 pt-16">
		<h2 class="m-0 font-sans font-bold antialiased drop-shadow-2xl ml-[8vw] mr-[6vw] text-center">
			Experience
		</h2>
		<div class="flex flex-col ml-[8vw] mr-[6vw] mt-[1vw]">
			<div class="flex flex-row">
				<div
					class="flex-none bg-base-100 shadow-2xl rounded-3xl mt-8 md:visible invisible w-0 h-0 md:w-4 md:h-auto"
				></div>
				<div
					class="flex-none bg-base-100 shadow-2xl rounded-3xl mt-8 invisible h-auto md:w-11 w-0"
				></div>
				<div class="m-0">
					<ExpCard
						v-for="expDetails in expDetailsAll"
						:expDetails="expDetails"
					></ExpCard>
				</div>
			</div>
		</div>
	</section>
</template>
