<style scoped>
	.card {
		background-color: hsl(var(--b1));
	}

	.projTitle {
		color: hsl(var(--bc));
	}

	.projContent {
		color: hsl(var(--nc));
	}
</style>

<script setup>
	const props = defineProps({
		project: {
			type: Object,
			required: true,
		},
	});
</script>

<template>
	<div
		class="card bg-base-100 image-full lg:basis-[400px] md:basis-5/6 grow shadow-2xl"
	>
		<div class="card-body text-base-content">
			<h2
				class="card-title projTitle m-0 flex-none pb-2 drop-shadow-2xl font-extrabold"
			>
				{{ project.title }}
			</h2>
			<p class="m-0 flex-none antialiased drop-shadow-2xl">
				{{ project.date }}
			</p>
			<p class="m-0 flex-none antialiased drop-shadow-2xl">
				{{ project.position }}
			</p>
			<ul
				class="m-0 font-medium text-sm projContent list-none p-0 drop-shadow-2xl"
			>
				<li class="p-0" v-for="projDesc in project.projDescAll">
					{{ projDesc }}
				</li>
			</ul>
			<div class="card-actions flex-auto place-content-end">
				<a
					:href="project.projectLink"
					target="_blank"
					v-if="project.projectLink"
					class="no-underline"
				>
					<button class="btn btn-secondary shadow-2xl drop-shadow-2xl">Github</button>
				</a>
				<div class="badge badge-primary p-4 font-medium shadow-2xl" v-else>
					Private Repository
				</div>
			</div>
		</div>
	</div>
</template>
