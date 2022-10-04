<script setup>
	var projectsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		projectsAll = res.data.value[0].projectsAll;
	});
</script>

<template>
	<section id="projects">
		<div class="grid grid-rows-1 justify-center mx-auto">
			<div class="px-[4vw]">
				<h2 class="m-0 font-sans font-bold antialiased drop-shadow-2xl mt-16">
					Projects
				</h2>
				<div class="flex flex-row flex-wrap gap-4 my-16 max-w-7xl">
					<ProjectCard
						v-for="project in projectsAll"
						:project="project"
					></ProjectCard>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	[data-theme="night"] #projects {
		background-image: linear-gradient(to top right, #0c496c, #46314b);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	[data-theme="winter"] #projects {
		background-image: linear-gradient(to bottom left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
