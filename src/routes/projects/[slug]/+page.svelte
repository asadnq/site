<script lang="ts">
	import SectionCard from '$lib/components/SectionCard.svelte';
	import { cn, projectColors } from '$lib/utils/ui';
	import type { PageProps } from './$types';

	let data: PageProps = $props();
	const { project } = data.data;
</script>

<svelte:head>
	<title>{project.title} | My Projects</title>
</svelte:head>

<SectionCard className={projectColors[project.color]}>
	<h1 class="text-4xl font-extrabold tracking-tight text-black">
		{project.title}
	</h1>

	<p class="text-base font-bold">
		{new Date(project.startDate).toLocaleDateString()}
	</p>

	{#if project.techStackIds?.length}
		<div class="flex flex-wrap gap-2">
			{#each project.techStackIds as tag}
				<span class="bg-primary-800 brutalist-border rounded-md px-2 py-1 text-sm text-black"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}

	<div>
		<div class={cn('prose prose-slate max-w-none', projectColors[project.color])}>
			{@html project.content}
		</div>
	</div>
</SectionCard>
