<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		/* Font minimum, preferred and maximum value */
		font-size: clamp(var(--min), var(--val), var(--max));
	}
	/* Font size variables */
	h1 {
		--min: 2em; /* minimum value */
		--val: 5vw; /* preferred value = 5% viewport width */
		--max: 2.5em; /* maximum value */
	}
	h2 {
		--min: 1.75em; /* minimum value */
		--val: 4vw; /* preferred value = 4% viewport width */
		--max: 2.25em; /* maximum value */
	}

	h3 {
		--min: 1.5em; /* minimum value */
		--val: 3vw; /* preferred value = 3% viewport width */
		--max: 2em; /* maximum value */
	}
	h4 {
		--min: 1.25em; /* minimum value */
		--val: 2.5vw; /* preferred value = 2.5% viewport width */
		--max: 1.75em; /* maximum value */
	}

	h5 {
		--min: 1em; /* minimum value */
		--val: 2vw; /* preferred value = 2% viewport width */
		--max: 1.5em; /* maximum value */
	}

	p {
		--min: 0.85em;
		--val: 1vw; /* preferred value = 1% viewport width */
		--max: 1em; /* maximum value */
	}
</style>

<template>
	<div>
		<NuxtPage />
	</div>
</template>
