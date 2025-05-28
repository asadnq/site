<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
	const today = new Date();
</script>

<div class="app min-h-screen">
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>

	<footer class="text-muted-foreground flex flex-col gap-y-2 px-4 py-4 mt-12 text-center text-sm">
		<p>&copy; {today.getFullYear()} Asadnq. All rights reserved</p>
		<p>
			This site is built with <a
				class="text-tertiary-500"
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
		max-width: 64rem;
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
