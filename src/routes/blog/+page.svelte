<script lang="ts">
	import type { PageProps } from './$types';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import PostCard from '$lib/components/PostCard.svelte';

	let { data }: PageProps = $props();
</script>

<SectionCard className="bg-slate-200 dark:bg-slate-800">
	<div class="flex flex-col space-y-2">
		<h1>Blog</h1>
		<p class="font-medium text-sky-800 dark:text-sky-200">Hmmm</p>
	</div>

	<div
		class="mx-auto grid min-h-[1127px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each data.posts.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime()) as blogPost (blogPost.slug)}
			<PostCard post={blogPost} href={`/blog/${blogPost.slug}`} />
		{/each}
	</div>
</SectionCard>
