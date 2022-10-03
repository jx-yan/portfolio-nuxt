<script setup>
	var projectsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		projectsAll = res.data.value[0].projectsAll;
	});
</script>

<template>
	<section id="projects">
		<div class="grid mx-auto">
			<div class="container mx-auto px-8">
				<h2 class="m-0 font-sans font-bold antialiased drop-shadow-2xl mt-16">
					Projects
				</h2>
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

<style>
	[data-theme="night"] #projects {
		background-image: linear-gradient(to top right, #002f4b, #a3421f);
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
