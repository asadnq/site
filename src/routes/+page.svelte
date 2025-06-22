<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	const menu: {
		title: string;
		href: string;
		classNames: string;
		disabled?: boolean;
	}[] = [
		{
			title: 'View my projects',
			href: '/projects',
			classNames:
				'bg-sky-200 text-sky-800 hover:bg-sky-800 hover:text-sky-200 dark:bg-sky-800 dark:text-sky-200 dark:hover:bg-sky-200 dark:hover:text-sky-800'
		},
		{
			title: 'Check my Resumé',
			href: '/resume',
			classNames:
				'bg-emerald-200 text-emerald-800 hover:bg-emerald-800 hover:text-emerald-200 dark:bg-emerald-800 dark:text-emerald-200 dark:hover:bg-emerald-200 dark:hover:text-emerald-800'
		},
		{
			title: 'More About me',
			href: '/about',
			classNames:
				'bg-lime-200 text-lime-800 hover:bg-lime-800 hover:text-lime-200 dark:bg-lime-800 dark:text-lime-200 dark:hover:bg-lime-200 dark:hover:text-lime-800'
		},
		{
			title: 'Read my Blog',
			href: '/blog',
			classNames:
				'bg-slate-200 text-slate-800 hover:bg-slate-800 hover:text-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="h-max-content mx-auto my-auto flex max-w-[54rem] flex-col items-center justify-center gap-y-4"
>
	<div class="flex flex-col items-center">
		<span
			class="text-surface-950-50 font-display-2 relative self-start text-xl leading-loose font-bold sm:text-2xl"
		>
			👋 Hi there,
		</span>
		<h1>
			<span class="anchor-letter-spacing text-surface-950-50 text-5xl font-bold md:text-7xl"
				>I'm</span
			>{' '}
			<span class="name-text font-display text-primary-500 text-7xl font-black md:text-9xl"
				>Asad</span
			>
		</h1>
	</div>
	<p
		class="text-surface-950-50 text-balanced relative max-w-xs text-center text-sm font-semibold sm:max-w-max sm:text-xl"
	>
		A{' '}
		<span class="text-secondary-900-100 font-black"> full-stack developer </span>{' '}
		with 5+ years of experience in the professional industry
		<br /> Based in Bandung, Indonesia 🇮🇩
	</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2">
		{#each menu as { title, href, disabled }, i}
			{#if disabled}
				<span
					class="clickable-2-xs min-w-[150px] rounded-md px-2 py-1 text-center transition-colors {menu[
						i
					].classNames} border-surface-950-50 cursor-not-allowed border-2 opacity-50"
				>
					{title}</span
				>
			{:else}
				<a
					{href}
					class="clickable-2-xs border-surface-950-50 min-w-[150px] rounded-md border-2 px-2 py-1 text-center transition-colors {menu[
						i
					].classNames}"
					data-sveltekit-preload-code="viewport"
				>
					{title}</a
				>
			{/if}
		{/each}
	</div>
	<h3 class="h3 text-surface-950-50">Contact me:</h3>
	<Contact />
</section>

<style>
	@media (min-width: 768px) {
		.name-text {
			-webkit-text-stroke: 5px var(--color-surface-950-50);
			text-shadow: 10px 10px var(--color-surface-950-50);
		}
	}

	.name-text {
		-webkit-text-stroke: 2.5px var(--color-surface-950-50);
		text-shadow: 5px 5px var(--color-surface-950-50);
	}
</style>
