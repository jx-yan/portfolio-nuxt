<style>
	/* [data-theme="winter"] #footer {
		background-image: linear-gradient(to bottom left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	} */
</style>

<script setup>
	var projectsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		projectsAll = res.data.value[0].projectsAll;
	});
</script>

<template>
	<section id="projects">
		<div class="grid mx-auto">
			<h2 class="m-0 font-sans font-bold antialiased drop-shadow-2xl mt-16 ml-[8vw] mr-[6vw]">
				Projects
			</h2>
			<div class="container-fluid ml-[8vw] mr-[6vw]">
				<div class="flex flex-row flex-wrap gap-4 my-16">
					<ProjectCard
						v-for="project in projectsAll"
						:project="project"
					></ProjectCard>
				</div>
			</div>
		</div>
	</section>
</template>
