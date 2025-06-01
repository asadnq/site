<script lang="ts">
	import type { PageProps } from './$types';

	let data: PageProps = $props();
	const { project } = data.data;
</script>

<svelte:head>
	<title>{project.title} | My Projects</title>
</svelte:head>

<section class="mx-auto max-w-4xl px-4 py-12">
	<div class="card space-y-6 rounded-2xl p-6 shadow-xl">
		<h1 class="text-primary-500 text-4xl font-bold tracking-tight">
			{project.title}
		</h1>

		<p class="text-sm text-gray-500">
			{new Date(project.startDate).toLocaleDateString()}
		</p>

		{#if project.techStackIds?.length}
			<div class="flex flex-wrap gap-2">
				{#each project.techStackIds as tag}
					<span class="badge preset-outline-primary px-2 py-1 text-sm">{tag}</span>
				{/each}
			</div>
		{/if}

		<div>
			<div class="prose prose-slate dark:prose-invert max-w-none">
				{@html project.content}
			</div>
		</div>
	</div>
</section>
