<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	const menu = [
		{
			title: 'View my projects',
			href: '/projects'
		},
		{
			title: 'Resumé',
			href: '/resume'
		},
		{
			title: 'More About me',
			href: '/about'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	class="flex h-full min-h-[85vh] max-w-[54rem] flex-col items-center justify-center gap-y-4 mx-auto"
>
	<span
		class="text-foreground font-display-2 relative self-start text-xl leading-loose font-bold sm:text-2xl"
	>
		👋 Hi there,
	</span>
	<h1 class="text-6xl sm:text-9xl">
		<span class="font-thin text-black">I'm</span>{' '}
		<span class="font-display text-primary-800">Asad</span>
	</h1>
	<p class="font-regular relative text-center text-sm sm:text-xl">
		A{' '}
		<span class="text-secondary-900 font-bold"> full-stack developer </span>{' '}
		with 5+ years of experience in the professional industry
		<br /> Based in Bandung, Indonesia 🇮🇩
	</p>
	<Contact />
	<div class="flex w-full flex-col items-center justify-center space-y-2"></div>
	{#each menu as { title, href }}
		<!-- <a {href} class="btn preset-tonal"> {title} </a> -->
		<a
			{href}
			class="text-tertiary-contrast-900-100 bg-tertiary-900-100 hover:text-tertiary-900 brutalist-border rounded-lg px-2 py-1 transition-colors"
		>
			{title}</a
		>
	{/each}
</section>

<style>
</style>
