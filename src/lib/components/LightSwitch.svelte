<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	let checked = $state(false);

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		window.umami.track('theme-changed', { mode });
		checked = event.checked;
	};
</script>

<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<Switch
	controlClasses="rounded-md clickable-2-xs bg-surface-50-950 p-0.5 text-surface-50-950 "
	thumbClasses="rounded-md bg-surface-50-950 p-0.5 text-surface-50-950 "
	{checked}
	{onCheckedChange}
>
	{#snippet inactiveChild()}<IconSun
			size="14"
			class="fill-surface-950 text-surface-950"
		/>{/snippet}
	{#snippet activeChild()}<IconMoon size="14" class="fill-surface-50 text-surface-50" />{/snippet}
</Switch>
