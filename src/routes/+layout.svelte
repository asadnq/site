<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { ArrowLeftIcon } from '@lucide/svelte';

	let { children } = $props();
	const today = new Date();
	const isRoot = $derived(page.url.pathname === '/');

	const scaleTimeFn = Tween.of(() => 1.5, { duration: 300, easing: cubicOut });
</script>

<div class="flex min-h-screen flex-col">
	<header class="flex flex-row items-center gap-x-2 px-5 py-6">
		{#if !isRoot}
			<button class="btn-icon transition" style="transform: scale({scaleTimeFn})">
				<ArrowLeftIcon width={24} height={24} />
			</button>
		{/if}
		<a href="/">
			<span
				class="font-display text-2xl font-extrabold"
				class:text-black={isRoot}
				class:text-primary-800={!isRoot}
			>
				asadnq.dev</span
			>
		</a>
	</header>
	<main class="mx-auto my-0 box-border flex w-full max-w-5xl flex-1 flex-col p-2">
		{@render children()}
	</main>

	<footer
		class="bg-secondary-100-900 text-tertiary-contrast-100-900 flex flex-col items-center justify-center p-3 sm:p-4 mt-4"
	>
		<p>&copy; {today.getFullYear()} Asadnq. All rights reserved</p>
		<p>
			This site is built with <a
				class="text-secondary-contrast-100-900 font-extrabold underline"
				href="https://svelte.dev/docs/kit/introduction"
				target="_blank">SvelteKit</a
			>
		</p>
	</footer>
</div>
