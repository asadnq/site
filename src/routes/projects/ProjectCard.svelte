<script lang="ts">
	import { page } from '$app/state';
	import type { ProjectEntry } from '$lib/schemas/content';

	let project: ProjectEntry = $props();

	const { slug, title, description, techStackIds } = project;
	const maxVisibleTechStacks = 3;
	const remainingTechStacks = (techStackIds ?? []).length - maxVisibleTechStacks;

	const isRoot = $derived(page.url.pathname === '/');
</script>

<a
	href={`/projects/${slug}/`}
	class="bg-card/50 h-full min-h-[175px] w-full rounded-md p-1 shadow-lg drop-shadow-lg"
>
	<div
		class="bg-background/75 flex h-full flex-col items-stretch justify-between rounded-lg px-4 py-2.5 backdrop-blur-xl"
	>
		<div class="flex flex-col gap-y-4">
			<h2 class="text-foreground text-2xl font-bold">{title}</h2>
			<p class="text-muted-foreground text-sm">{description}</p>
		</div>
		<div class="flex flex-row flex-wrap items-center justify-end gap-x-4 pt-4"></div>
	</div>
</a>
