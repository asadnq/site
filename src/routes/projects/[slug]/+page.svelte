<script lang="ts">
	import type { PageProps } from './$types';

	let data: PageProps = $props();
	const { project } = data.data;
</script>

<svelte:head>
	<title>{project.title} | My Projects</title>
</svelte:head>

<article class="mx-0 max-w-4xl px-0 py-8 sm:mx-auto sm:px-4 sm:py-12">
	<!-- <div class="bg-surface-500 brutalist-border space-y-6 rounded-2xl p-2 sm:p-6"> -->
	<h1 class="text-primary-800 text-4xl font-extrabold tracking-tight">
		{project.title}
	</h1>

	<p class="text-surface-50-950 text-sm font-bold">
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
		<div class="prose prose-slate max-w-none">
			{@html project.content}
		</div>
	</div>
	<!-- </div> -->
</article>
