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

<div class="app min-h-screen">
	<header class="flex flex-row items-center gap-x-2 px-5 py-12">
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
	<main>
		{@render children()}
	</main>

	<footer class="text-muted-foreground mt-12 flex flex-col gap-y-2 px-4 py-4 text-center text-sm">
		<p>&copy; {today.getFullYear()} Asadnq. All rights reserved</p>
		<p>
			This site is built with <a
				class="text-tertiary-700"
				href="https://svelte.dev/docs/kit/introduction"
				target="_blank">SvelteKit</a
			>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 84rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
