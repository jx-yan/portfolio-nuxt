<script setup>
    const props = defineProps({
        expDetails: {
            type: Object,
            required: true
        }
    });
</script>


<template>
	<div class="card bg-base-100 shadow-xl ml-12">
		<div class="card-body">
			<h3 class="card-title font-bold antialiased drop-shadow-2xl m-0">
				{{expDetails.title}}
			</h3>
			<p class="m-0">{{expDetails.company}}</p>
			<p class="m-0">{{expDetails.date}}</p>
			<ul class="m-0 font-medium">
				<li v-for="jobDesc in expDetails.jobDescAll">{{jobDesc}}</li>
			</ul>
		</div>
	</div>
</template>