<script lang="ts">
	import SectionCard from '$lib/components/SectionCard.svelte';
	import { cn } from '$lib/utils/ui';
	import type { PageProps } from './$types';

	let data: PageProps = $props();
	const { blog } = data.data;
</script>

<svelte:head>
	<title>{blog.title} | My blogs</title>
</svelte:head>

<SectionCard className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
	{#if blog.heroImage}
		<img
			src={blog.heroImage}
			alt={`Cover image for ${blog.title}`}
			class="border-surface-950-50 mb-4 h-96 w-full rounded-md border-2 object-cover"
		/>
	{/if}

	<h1 class="text-surface-950-50 text-4xl font-extrabold tracking-tight">
		{blog.title}
	</h1>

	<p class="text-base font-bold">
		{new Date(blog.publishedDate).toLocaleDateString()}
	</p>

	<div>
		<div class={cn('prose dark:prose-invert max-w-none')}>
			{@html blog.content}
		</div>
	</div>
</SectionCard>
