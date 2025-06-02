<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import ProjectCard from './ProjectCard.svelte';
	const isRoot = $derived(page.url.pathname !== '/');

	let { data }: PageProps = $props();
</script>

<section class="flex flex-col space-y-6 brutalist-shadow-xl px-4 py-6 border-4 border-black rounded-xl bg-sky-200">
	<div class="flex flex-col space-y-2">
		<h2 class="h2 font-sans text-black">Projects</h2>
		<p class="font-medium text-sky-800">Here are some of the projects I've worked on.</p>
	</div>

	<div class="mx-auto grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as project (project.slug)}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
