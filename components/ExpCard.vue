<script setup>
	const props = defineProps({
		expDetails: {
			type: Object,
			required: true,
		},
	});
</script>

<style scoped>
	[data-theme="night"] .logo {
		background-color: hsl(var(--s));
	}
</style>

<template>
	<div>
		<span
			class="avatar rounded-full bg-base-content shadow-2xl -translate-x-16 translate-y-20 md:visible invisible w-0 h-0 md:w-6 md:h-6"
			><span
				class="hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
				
			></span
		></span>
		<div class="card bg-base-100 shadow-xl mt-0">
			<div class="card-body">
				<h3 class="card-title font-bold antialiased drop-shadow-2xl m-0 shrink">
					{{ expDetails.title }}
				</h3>
				<p class="m-0 font-bold text-lg shrink">{{ expDetails.company }}</p>
				<p class="m-0">{{ expDetails.date }}</p>
				<ul class="m-0 font-medium text-xs md:text-sm text-base-content">
					<li class="" v-for="jobDesc in expDetails.jobDescAll">
						{{ jobDesc }}
					</li>
				</ul>

				<div class="card-actions mt-2">
					<NuxtLink
						:to="expDetails.learnMore"
						class="no-underline order-last md:order-first"
						v-if="expDetails.learnMore"
					>
						<button class="btn btn-secondary drop-shadow-2xl antialiased">
							Learn More
						</button>
					</NuxtLink>
					<div
						class="flex flex-row flex-wrap grow justify-end gap-2 p-2 self-end"
					>
						<div
							class="text-xs badge badge-outline inline-flex p-3"
							v-for="expSkill in expDetails.expSkills"
						>
							{{ expSkill }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
