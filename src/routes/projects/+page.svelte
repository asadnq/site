<script lang="ts">
	import type { PageProps } from './$types';
	import ProjectCard from './ProjectCard.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let { data }: PageProps = $props();

	let filter: 'personal' | 'work' = $state('work');

	const onCheckedChange = (event: { checked: boolean }) => {
		filter = event.checked ? 'work' : 'personal';
	};
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

	<div class="flex flex-col space-y-8">
		<div class="flex flex-row items-center justify-center gap-x-2">
			<span class="font-bold">Personal</span>
			<Switch
				controlClasses="rounded-md clickable-2-xs p-0.5 "
				thumbClasses="rounded-sm p-0.5"
				checked={filter === 'work'}
				{onCheckedChange}
			></Switch>
			<span class="font-bold">Work</span>
		</div>
		<div
			class="mx-auto grid min-h-[1127px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each data.projects
				.filter((p) => p.projectType === filter)
				.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()) as project (project.slug)}
				<ProjectCard {...project} />
			{/each}
		</div>
	</div>
</SectionCard>
