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
		class="card bg-base-100 image-full lg:basis-[400px] md:basis-5/6 flex-initial shadow-2xl"
	>
		<div class="card-body text-base-content">
			<h2
				class="card-title projTitle m-0 flex-none h-14 drop-shadow-2xl font-extrabold"
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

<style scoped>
	.card {
		background-image: url("https://res.cloudinary.com/dymyh1ea3/image/upload/v1664855909/nasa-earth-bg_v3tnjg.jpg");
		background-size: cover;
	}

	[data-theme="night"] .projTitle {
		color: hsl(var(--bc));
	}

	[data-theme="winter"] .projTitle {
		color: hsl(var(--b1));
	}

	[data-theme="night"] .projContent {
		color: hsl(var(--nc));
	}

	[data-theme="winter"] .projContent {
		color: hsl(var(--b1));
	}
</style>
