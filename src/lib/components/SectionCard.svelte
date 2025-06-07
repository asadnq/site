<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Snippet } from 'svelte';
	import BackButton from './BackButton.svelte';

	let { children, className }: { children: Snippet; className?: string } = $props();
</script>

<section
	class={cn(
		'flex flex-col space-y-5 rounded-none border-x-0 border-y-4 border-surface-950-50 px-4 py-6 sm:mx-2 sm:rounded-xl sm:border-x-4',
		className
	)}
>
	<BackButton />
	{@render children()}
</section>
