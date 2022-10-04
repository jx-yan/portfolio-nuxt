<script setup>
	var designsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		designsAll = res.data.value[0].designsAll;
	});

	var designDisplayed = reactive({
		title: designsAll[0].title,
		position: designsAll[0].position,
		projectName: designsAll[0].projectName,
		date: designsAll[0].date,
		desc: designsAll[0].desc,
		link: designsAll[0].link,
		imgLink: designsAll[0].imgLink,
	});

	function displayDesign(title) {
		for (let designObj of designsAll) {
			if (designObj.title == title) {
				designDisplayed.title = designObj.title;
				designDisplayed.position = designObj.position;
				designDisplayed.projectName = designObj.projectName;
				designDisplayed.date = designObj.date;
				designDisplayed.desc = designObj.desc;
				designDisplayed.link = designObj.link;
				designDisplayed.imgLink = designObj.imgLink;
			}
		}
	}
</script>

<template>
	<section id="design">
		<div class="grid mx-auto">
			<div class="container mx-auto pl-[8vw] pr-[6vw]">
				<div class="dropdown mt-16 z-50 mb-0 drop-shadow-2xl">
					<label
						tabindex="0"
						class="btn btn-outline btn-secondary-focus m-1 text-lg font-sans normal-case animate-bounce drop-shadow-2xl shadow-2xl"
						>Design Portfolio</label
					>
					<ul
						tabindex="0"
						class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto -translate-y-6 text-center"
					>
						<li v-for="design in designsAll">
							<a class="no-underline text-left" @click="displayDesign(design.title)">
								{{ design.title }}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container mx-auto p-8 flex-col pl-[8vw] pr-[6vw] mb-4">
				<div class="card shadow-2xl flex-auto">
					<img
						:src="designDisplayed.imgLink"
						class="m-0 max-h-80 object-cover"
					/>

					<div class="card-body basis-1/4">
						<div class="flex">
							<h2 class="m-0 text-base-content inline-flex">
								{{ designDisplayed.title }}
							</h2>
							
						</div>
						<p class="m-0 text-base-content text-lg">
							{{ designDisplayed.position }}
						</p>
						<p class="m-0 text-base-content">{{ designDisplayed.date }}</p>
						<p class="m-0 text-base-content font-mono lg:text-lg md:text-sm">{{ designDisplayed.desc }}</p>
						<div class="card-actions justify-end mt-3">
							<span class="m-0 text-secondary-focus justify-start pName font-bold md:text-base text-sm inline-flex flex-wrap">{{
								designDisplayed.projectName
							}}</span>
							<span class="grow"></span>
							<a :href="designDisplayed.link" class="no-underline" target="_blank">
								<button class="btn btn-secondary shadow-2xl drop-shadow-2xl">View Prototype</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	[data-theme="night"] #design {
		background-image: linear-gradient(to bottom right, #0D324D, #7F5A83);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	[data-theme="winter"] #design {
		background-image: linear-gradient(to top left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	[data-theme="night"] .pName {
		color: hsl(var(--nc));
	}


</style>
