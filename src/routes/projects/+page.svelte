<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import ProjectCard from './ProjectCard.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	const isRoot = $derived(page.url.pathname !== '/');

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>My Projects</title>
</svelte:head>

<SectionCard className="bg-sky-200 dark:bg-sky-800">
	<div class="flex flex-col space-y-2">
		<h1>Projects</h1>
		<p class="font-medium text-sky-800 dark:text-sky-200">
			Here are some of the projects I've worked on.
		</p>
	</div>

	<div class="mx-auto grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.projects.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()) as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</SectionCard>
