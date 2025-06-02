<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import ProjectCard from './ProjectCard.svelte';
	const isRoot = $derived(page.url.pathname !== '/');

	let { data }: PageProps = $props();
</script>

<section class="flex flex-col space-y-12">
	<h2 class="h2 font-sans text-secondary-800">Projects</h2>
	<p class="text-black">Here are some of the projects I've worked on.</p>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-auto">
		{#each data.projects as project (project.slug)}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
