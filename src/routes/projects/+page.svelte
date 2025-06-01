<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import ProjectCard from './ProjectCard.svelte';
	const isRoot = $derived(page.url.pathname !== '/');

	let { data }: PageProps = $props();
</script>

<section class="flex flex-col space-y-12">
	<h2 class="h2 font-sans text-white">Projects</h2>
	<p class="text-surface-50">Here are some of the projects I've worked on.</p>

	{#each data.projects as project (project.slug)}
		<ProjectCard {...project} />
	{/each}
</section>
