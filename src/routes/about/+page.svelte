<script lang="ts">
	import SectionCard from '$lib/components/SectionCard.svelte';
	import { fly, scale, fade } from 'svelte/transition';
</script>

<SectionCard
	className="grid grid-cols-3 gap-4 bg-lime-200 font-medium text-lime-800"
>
	<div class="col-span-2 flex flex-col space-y-4 text-lg font-black sm:row-start-1">
		<h2 in:fly={{ y: 25, opacity: 0, duration: 400 }} class="text-3xl font-black text-black">
			Hi, I'm Asad! A full-stack developer based in Bandung, Indonesia 🇮🇩
		</h2>

		<p in:fly={{ y: 25, opacity: 0, duration: 400, delay: 200 }}>
			I'm an experienced full-stack with a proven background spanning over 5+ years, coupled with
			valuable exposure to project and team management. My experience includes building and
			maintaining web apps, server-side APIs, cross-platform mobile apps, and browser extensions.
		</p>

		<p in:fly={{ y: 25, opacity: 0, duration: 400, delay: 400 }}>
			In addition, I’ve been actively learning DevOps to expand my skill set and am eager to gain
			hands-on experience in this area.
		</p>

		<p in:fly={{ y: 25, opacity: 0, duration: 400, delay: 600 }}>
			Outside of work, I'm also active in local communities. I frequently attend local book club
			meetings and coordinate{' '}
			<a href="https://www.instagram.com/soekabahasa" class="font-bold text-blue-700 underline">
				Soekabahasa
			</a>, a foreign language conversation club, where I help organize events and improve member
			experiences.
		</p>

		<p in:fly={{ y: 25, opacity: 0, duration: 400, delay: 800 }}>
			In my spare time, you can find me reading books, writing, learning languages, or running.
		</p>
	</div>

	<div class="flex items-start justify-center sm:items-center">
		<img
			src="/whats-this.png"
			alt="Illustration"
			class="w-64 rounded-full border-4 border-black shadow-[6px_6px_0_0_black] sm:w-80"
			in:scale={{ start: 2, duration: 500 }}
		/>
	</div>
</SectionCard>
