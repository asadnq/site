<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ArrowLeftIcon } from '@lucide/svelte';
	import LightSwitch from '$lib/components/LightSwitch.svelte';

	let { children } = $props();
	const today = new Date();
	const isRoot = $derived(page.url.pathname === '/');

	const scaleTimeFn = Tween.of(() => 1.5, { duration: 300, easing: cubicOut });
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="mx-auto flex w-full max-w-5xl flex-row items-center justify-between gap-x-2 px-5 py-6"
	>
		<!-- {#if !isRoot}
			<button class="btn-icon transition" style="transform: scale({scaleTimeFn})">
				<ArrowLeftIcon width={24} height={24} />
			</button>
		{/if} -->
		<a href="/">
			<span
				class="font-display text-2xl font-black transition-all duration-300"
				class:text-surface-950-50={isRoot}
				class:text-primary-800-200={!isRoot}
				class:underline={!isRoot}
			>
				asadnq.dev</span
			>
		</a>
		<LightSwitch />
	</header>
	<main class="mx-auto my-0 box-border flex w-full max-w-5xl flex-1 flex-col">
		{@render children()}
	</main>

	<footer
		class="bg-secondary-200-800 border-surface-950-50 mt-0 flex flex-col items-center justify-center p-3 sm:mt-4 sm:border-t-4 sm:p-4"
		class:border-t-4={isRoot}
	>
		<p>&copy; {today.getFullYear()} Asadnq. All rights reserved</p>
		<p>
			This site is built with <a
				class="font-extrabold text-orange-500 underline"
				href="https://svelte.dev/docs/kit/introduction"
				target="_blank">SvelteKit</a
			>
		</p>
	</footer>
</div>
