<script setup>
	var expDetailsAll = null;
    
    await useFetch("/api/_content/query")
    .then((res) => {
        expDetailsAll = res.data.value[0].expDetailsAll;
    });
</script>

<style>
	[data-theme="night"] #experience {
		background-image: linear-gradient(to top right, #002f4b, #a3421f);
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
	<section id="experience">
		<div class="grid mx-auto">
			<div class="container mx-auto px-8">
				<h2
					class="m-0 p-5 font-sans font-bold antialiased drop-shadow-2xl mt-16"
				>
					My Experience
				</h2>
				<div class="flex gap-4 pl-5 mt-12">
					<div class="bg-white shadow-2xl rounded-3xl w-5"></div>
					<div class="gap-4">
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
