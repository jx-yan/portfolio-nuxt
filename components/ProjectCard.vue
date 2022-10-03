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
		class="card bg-base-100 image-full lg:basis-96 md:basis-5/6 flex-initial shadow-2xl"
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
		background-image: url("https://lh3.googleusercontent.com/6GJQZBAKShJYQIzTfhSzNXVdBazbQz754glR4jDrkxCerovqQrI3B3DGTNW87lIS1QLI8TpCyPPNb-uuVFtAIBiGfzMHxhOrQPnTWaKDQWjsGctnYS7jJTYkdvE_skeZbOiB2uAewIEFKEJ0Eks4Bus8yIJ2JXzUx1wMHCVcyX4M4NPNXdZRIMohqsd6EEoIWTibuGbZpLkkaHqSA55_WpfEBKA2BKbvPePKw16D5lzsjEncafHuR1PACchP7x0JwtgmtJxwYpR-n5OJCgSZ3SIoW4IeOdUZE6rJeMqzu3ElLkDgbmx1Lf2KN1VsGpUBx85x7_f_d08SwMgZjt-TDSpKAYSuPo8FlK6kxQsbI5JSAh1mfLLsvoelfhc_tqGW8cKHunCNLyS-D6f7ogQWpd51GF2T4Hvs91KIkmRLn9TR_EBKvFrRxLE1fS8kgPlNUw8afevd-9ysHLQQippwy6KQNKlXeMLL9PZlaNgoEPHuji1TtBdI8Yhiqe346d1c5GWfe4x-V0GvmQ749yMZpIc15dHCtA6dzMmarN1jvrVO9jbKVWDdTMdVATs4563KGuLs3Gb-vZbl-xVX1bHZ_dkYqO2rtJX0hZzrp9lrm_b6cx1XxDSt3gO6Zz4VN0oHUn8DFaOA51M4rZhNtb5G0ge2iThleRpm87dlve53XxQDLCPWcXC_BvNIv4sN-Z9lezwvmDo99tpoa7AHNKgRoorYf1JgcfO0S8QvY5YQxexZ_u39luMGGuM2-pCR-lAw0ULTMgtMzUsYWHIdOkto2Kmeo8ZpC9zojDIa2YiyRqXGasnbOTrVFYQ_V3M2nwMpdkTFcfbWoybIc4-RICJqPk93syNeMViDdxW2VmRb=w1378-h917-no?authuser=0");
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
