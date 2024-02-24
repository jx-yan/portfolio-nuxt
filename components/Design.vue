<style>
	/* [data-theme="winter"] #footer {
		background-image: linear-gradient(to bottom left, #8080ee, #f4d8bb);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	} */
</style>

<script setup>
	var designsAll = null;

	await useFetch("/api/_content/query").then((res) => {
		designsAll = res.data.value[0].designsAll;
	});

	let designDisplayed = reactive({
		title: designsAll[0].title,
		position: designsAll[0].position,
		projectName: designsAll[0].projectName,
		date: designsAll[0].date,
		desc: designsAll[0].desc,
		link: designsAll[0].link,
		imgLink:"https://res.cloudinary.com/dymyh1ea3/image/upload/v1664855909/shopeepay-revamp_qylwem.png",
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
				designDisplayed.imgLink = new URL(
					designObj.imgLink,
					import.meta.url
				).href;
			}
		}
	}
</script>

<template>
	<section id="design">
		<div class="grid mx-auto">
			<div class="container-fluid ml-[8vw] mr-[6vw] mt-0 text-center">
				<div class="dropdown mt-16 z-50 mb-6 drop-shadow-2xl">
					<label
						tabindex="0"
						class="btn btn-outline btn-secondary-focus text-lg font-sans normal-case animate-bounce drop-shadow-2xl shadow-2xl px-8"
						>Design Portfolio</label
					>
					<ul
						tabindex="0"
						class="bg-base-100 dropdown-content menu p-2 m-0 shadow rounded-box"
					>
						<li v-for="design in designsAll" class="m-1 p-0">
							<a
								class="btn btn-ghost h-auto leading-relaxed rounded-btn text-base-content capitalize px-2"
								@click="displayDesign(design.title)"
							>
								{{ design.title }}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="container-fluid ml-[8vw] mr-[6vw] flex-col mb-4 mt-[1vw]">
				<div class="card shadow-2xl flex-auto">
					<NuxtImg :src="designDisplayed.imgLink"  class="m-0 max-h-80 object-cover"/>
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
						<p class="m-0 text-base-content font-mono lg:text-lg md:text-sm">
							{{ designDisplayed.desc }}
						</p>
						<div class="card-actions justify-end">
							<span
								class="m-0 mt-5 text-secondary-focus justify-start pName font-bold md:text-base text-sm inline-flex flex-wrap"
								>{{ designDisplayed.projectName }}</span
							>
							<span class="grow"></span>
							<a
								:href="designDisplayed.link"
								class="no-underline pt-4"
								target="_blank"
							>
								<button
									class="btn glass shadow-2xl drop-shadow-2xl capitalize bg-base-content text-black"
								>
									View Prototype
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
