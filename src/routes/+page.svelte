<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	const menu = [
		{
			title: 'View my projects',
			href: '/projects',
			classNames: 'bg-sky-200 text-sky-800 hover:bg-sky-800 hover:text-sky-200'
		},
		{
			title: 'Check my Resumé',
			href: '/resume',
			classNames: 'bg-emerald-200 text-emerald-800 hover:bg-emerald-800 hover:text-emerald-200'
		},
		{
			title: 'More About me',
			href: '/about',
			classNames: 'bg-lime-200 text-lime-800 hover:bg-lime-800 hover:text-lime-200'
		},
		{
			title: 'Read my Blog',
			href: '/blog',
			disabled: true,
			classNames: 'bg-slate-200 text-slate-800 hover:bg-slate-800 hover:text-slate-200'
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
			class="text-foreground font-display-2 relative self-start text-xl leading-loose font-bold sm:text-2xl"
		>
			👋 Hi there,
		</span>
		<h1>
			<span class="anchor-letter-spacing text-5xl font-bold text-black md:text-7xl">I'm</span>{' '}
			<span class="name-text font-display text-primary-200-800 text-7xl font-black md:text-9xl"
				>Asad</span
			>
		</h1>
	</div>
	<p
		class="text-balanced relative max-w-xs text-center text-sm font-semibold sm:max-w-max sm:text-xl"
	>
		A{' '}
		<span class="text-secondary-900 font-black"> full-stack developer </span>{' '}
		with 5+ years of experience in the professional industry
		<br /> Based in Bandung, Indonesia 🇮🇩
	</p>
	<div class="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2">
		{#each menu as { title, href, disabled }, i}
			{#if disabled}
				<span
					class="brutalist-border min-w-[150px] rounded-md px-2 py-1 text-center transition-colors {menu[
						i
					].classNames} cursor-not-allowed border-2 border-black opacity-50"
				>
					{title}</span
				>
			{:else}
				<a
					{href}
					class="brutalist-border min-w-[150px] rounded-md border-2 border-black px-2 py-1 text-center transition-colors {menu[
						i
					].classNames}"
				>
					{title}</a
				>
			{/if}
		{/each}
	</div>
	<h3 class="h3 text-black">Contact me:</h3>
	<Contact />
</section>

<style>
	@media (min-width: 768px) {
		.name-text {
			-webkit-text-stroke: 5px var(--color-foreground);
			text-shadow: 10px 10px var(--color-foreground);
		}
	}

	.name-text {
		-webkit-text-stroke: 2.5px var(--color-foreground);
		text-shadow: 5px 5px var(--color-foreground);
	}
</style>
