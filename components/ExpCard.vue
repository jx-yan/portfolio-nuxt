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
		--tw-bg-opacity: 0.8;
		background-color: var(--tw-prose-headings);
	}
</style>

<template>
	<div>
		<span
			class="avatar rounded-full bg-base-content shadow-2xl -translate-x-16 translate-y-20 md:visible invisible w-0 h-0 md:w-6 md:h-6"
			><span
				class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
			></span
		></span>
		<div class="card bg-base-100 shadow-xl mt-0 max-w-6xl">
			<div class="card-body flex">
				<div class="flex-initial">
					<img
						class="logo m-0 rounded-3xl px-4 py-2 max-w-xs max-h-28 inline-flex float-right ml-5 md:visible invisible w-0 h-0 md:w-auto md:h-auto"
						:src="expDetails.companyLogo"
						v-if="expDetails.companyLogo"
					/>
					<h3
						class="card-title font-bold antialiased drop-shadow-2xl m-0 shrink"
					>
						{{ expDetails.title }}
					</h3>
					<p class="m-0 font-medium shrink">{{ expDetails.company }}</p>
					<p class="m-0">{{ expDetails.date }}</p>
					<ul class="m-0 font-medium text-sm text-base-content">
						<li v-for="jobDesc in expDetails.jobDescAll">{{ jobDesc }}</li>
					</ul>
				</div>
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
						class="flex flex-row flex-wrap grow justify-end gap-4 p-3 self-end"
					>
						<div
							class="text-xs badge badge-outline inline-flex p-4"
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
