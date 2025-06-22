<script lang="ts">
	import type { BlogPost } from '$lib/schemas/content';
	import { cn } from '$lib/utils/ui';
	import type { Snippet } from 'svelte';

	let {
		post,
		end,
		cardClassName,
		href
	}: { post: BlogPost; end?: Snippet; cardClassName?: string; href: string } = $props();

	const { title, description, heroImage, publishedDate } = post;
</script>

<a
	{href}
	class={cn(
		'group bg-surface-50-950 clickable-1-lg relative block flex h-full max-h-[454px]  w-full flex-col rounded-xl p-0.5 md:max-w-[380px]',
		cardClassName
	)}
>
	<!-- Hero Image -->
	{#if heroImage}
		<img
			src={heroImage}
			alt={`Cover image for ${title}`}
			class="border-surface-950-50 mb-4 h-40 w-full rounded-md border-2 object-cover"
		/>
	{/if}

	<div class="flex h-full flex-col justify-between rounded-lg px-5 py-4">
		<!-- Title & Description -->
		<div class="space-y-3">
			<h3 class="text-surface-950-50 text-2xl font-extrabold">{title}</h3>
			<p class="line-clamp-3 text-sm font-medium overflow-ellipsis">{description}</p>
		</div>

		<!-- Footer Section -->
		<div class="flex flex-col gap-2">
			<!-- Start Date -->
			<p class="font-mono text-xs font-bold">
				Published at {publishedDate.toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'short'
				})}
			</p>

			{#if end}
				{@render end()}
			{/if}
		</div>
	</div>
</a>
