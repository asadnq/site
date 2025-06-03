<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	const menu = [
		{
			title: 'View my projects',
			href: '/projects',
			classNames: 'bg-sky-200 text-sky-800 hover:bg-sky-800 hover:text-sky-200'
		},
		{
			title: 'Resumé',
			href: '/resume',
			classNames: 'bg-emerald-200 text-emerald-800 hover:bg-emerald-800 hover:text-emerald-200'
		},
		{
			title: 'More About me',
			href: '/about',
			classNames: 'bg-lime-200 text-lime-800 hover:bg-lime-800 hover:text-lime-200'
		},
		{
			title: 'Blog',
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
	class="mx-auto flex h-full min-h-[85vh] max-w-[54rem] flex-col items-center justify-center gap-y-4"
>
	<span
		class="text-foreground font-display-2 relative self-start text-xl leading-loose font-bold sm:text-2xl"
	>
		👋 Hi there,
	</span>
	<h1 class="rounded-lg p-2 text-6xl sm:text-9xl">
		<span class="font-thin text-black">I'm</span>{' '}
		<span class="font-display text-primary-200-800">Asad</span>
	</h1>
	<p class="relative text-center text-sm font-medium sm:text-xl">
		A{' '}
		<span class="text-secondary-900 font-bold"> full-stack developer </span>{' '}
		with 5+ years of experience in the professional industry
		<br /> Based in Bandung, Indonesia 🇮🇩
	</p>
	<div class="flex w-full flex-col items-center justify-center gap-x-4 gap-y-2 md:flex-row">
		{#each menu as { title, href, disabled }, i}
			{#if disabled}
				<span
					class="brutalist-border rounded-md px-2 py-1 transition-colors {menu[i]
						.classNames} cursor-not-allowed border-2 border-black opacity-50"
				>
					{title}</span
				>
			{:else}
				<a
					{href}
					class="brutalist-border rounded-md border-2 border-black px-2 py-1 transition-colors {menu[
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
