<script lang="ts">
	import SectionCard from '$lib/components/SectionCard.svelte';
	import { cn, projectColors } from '$lib/utils/ui';
	import { ArrowLeftIcon } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import BackButton from '$lib/components/BackButton.svelte';
	import TechStackBadge from '$lib/components/TechStackBadge.svelte';

	let data: PageProps = $props();
	const { project } = data.data;
</script>

<svelte:head>
	<title>{project.title} | My Projects</title>
</svelte:head>

<SectionCard className={projectColors[project.color]}>
	<h1 class="text-surface-950-50 text-4xl font-extrabold tracking-tight">
		{project.title}
	</h1>

	<p class="text-base font-bold">
		{new Date(project.startDate).toLocaleDateString()}
	</p>

	{#if project.techStackIds?.length}
		<div class="flex flex-wrap gap-2">
			{#each project.techStackIds as tag}
				<TechStackBadge name={tag} />
			{/each}
		</div>
	{/if}

	<div>
		<div class={cn('prose dark:prose-invert max-w-none', projectColors[project.color])}>
			{@html project.content}
		</div>
	</div>
</SectionCard>
