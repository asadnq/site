<script lang="ts">
	import { page } from '$app/state';
	import type { ProjectEntry } from '$lib/schemas/content';

	let project: ProjectEntry = $props();

	const { slug, title, description, techStackIds, heroImage, startDate } = project;
	const maxVisibleTechStacks = 3;
	const remainingTechStacks = (techStackIds ?? []).length - maxVisibleTechStacks;

	const isRoot = $derived(page.url.pathname === '/');
</script>

<a
	href={`/projects/${slug}/`}
	class="group bg-surface-50 relative block h-full w-full rounded-xl border-[3px] border-black p-0.5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] md:max-w-[380px]"
>
	<div class="bg-surface-50 flex h-full flex-col justify-between rounded-lg px-5 py-4">
		<!-- Hero Image -->
		{#if heroImage}
			<img
				src={heroImage}
				alt={`Cover image for ${title}`}
				class="mb-4 h-40 w-full rounded-md border-2 border-black object-cover"
			/>
		{/if}

		<!-- Title & Description -->
		<div class="space-y-3">
			<h2 class="text-2xl font-extrabold text-black">{title}</h2>
			<p class="text-surface-contrast-50 line-clamp-3 text-sm overflow-ellipsis">{description}</p>
		</div>

		<!-- Footer Section -->
		<div class="mt-4 flex flex-col gap-2">
			<!-- Start Date -->
			<p class="text-surface-contrast-dark font-mono text-xs font-bold">
				Started: {startDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
			</p>

			<!-- Tech Stack Tags -->
			{#if techStackIds?.length}
				<div class="flex flex-wrap gap-1 text-xs font-semibold">
					{#each techStackIds.slice(0, maxVisibleTechStacks) as tech}
						<span
							class="bg-surface-200-800 text-surface-contrast-200-800 rounded border border-black px-2 py-0.5"
						>
							{tech}
						</span>
					{/each}

					{#if remainingTechStacks > 0}
						<span
							class="bg-surface-200-800 text-surface-contrast-200-800 rounded border border-black px-2 py-0.5"
						>
							+{remainingTechStacks}
						</span>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</a>
