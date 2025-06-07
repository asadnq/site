<script lang="ts">
	let animationStep = 0;
	const delay = 0.3;

	let displayContacts = false;
</script>

<section
	class="flex min-h-full flex-1 flex-col items-center justify-center gap-y-4 px-12 py-8 md:gap-y-8"
>
	<div class="flex flex-col gap-y-4">
		<span
			class="text-surface-950-50 font-display-2 relative left-[-40px] text-2xl leading-loose font-bold"
		>
			👋 Hi there,
		</span>
		<h1 class="text-7xl sm:text-9xl">
			<span class="font-thin">I'm</span>{' '}
			<span class="font-display">Asad</span>
		</h1>
		<p class="font-regular relative left-[40px] text-center text-xl">
			A{' '}
			<span class="text-secondary font-bold"> full-stack developer </span>{' '}
			with 5+ years of experience in the professional industry
			<br /> Based in Bandung, Indonesia 🇮🇩
		</p>
	</div>
	<div class="h-[48px]">{displayContacts && ''}</div>
</section>
