<script lang="ts">
	import { page } from '$app/state';
	import TechStackBadge from '$lib/components/TechStackBadge.svelte';
	import type { ProjectEntry } from '$lib/schemas/content';
	import { cn, projectColors } from '$lib/utils/ui';

	let project: ProjectEntry = $props();

	const { slug, title, description, techStackIds, heroImage, startDate } = project;
	const maxVisibleTechStacks = 3;
	const remainingTechStacks = (techStackIds ?? []).length - maxVisibleTechStacks;

	const projectColor = projectColors[project.color] ?? projectColors['blue'];
</script>

<a
	href={`/projects/${slug}/`}
	class={cn(
		'group bg-surface-50-950 clickable-1-lg relative block h-full max-h-[354px] w-full  rounded-xl p-0.5 md:max-w-[380px]',
		projectColor
	)}
>
	<div class="flex h-full flex-col justify-between rounded-lg px-5 py-4">
		<!-- Hero Image -->
		{#if heroImage}
			<img
				src={heroImage}
				alt={`Cover image for ${title}`}
				class="border-surface-950-50 mb-4 h-40 w-full rounded-md border-2 object-cover"
			/>
		{/if}

		<!-- Title & Description -->
		<div class="space-y-3">
			<h3 class="text-surface-950-50 text-2xl font-extrabold">{title}</h3>
			<p class="line-clamp-3 text-sm font-medium overflow-ellipsis">{description}</p>
		</div>

		<!-- Footer Section -->
		<div class="mt-4 flex flex-col gap-2">
			<!-- Start Date -->
			<p class="font-mono text-xs font-bold">
				Started: {startDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
			</p>

			<!-- Tech Stack Tags -->
			{#if techStackIds?.length}
				<div class="flex flex-wrap gap-1 text-xs">
					{#each techStackIds.slice(0, maxVisibleTechStacks) as tech}
						<TechStackBadge name={tech} size="xs" />
					{/each}

					{#if remainingTechStacks > 0}
						<TechStackBadge name={`+${remainingTechStacks}`} size="xs" />
					{/if}
				</div>
			{/if}
		</div>
	</div>
</a>
