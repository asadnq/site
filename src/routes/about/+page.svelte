<script lang="ts">
	import { fly, scale, fade } from 'svelte/transition';
</script>

<section class="grid grid-cols-3 gap-4 rounded-2xl border-4 border-black p-2 sm:p-6">
	<div class="col-span-2 flex flex-col space-y-4 sm:row-start-1">
		<h2
			in:fly={{ y: 25, opacity: 0, duration: 400 }}
			class="font-display bg-secondary-500 rounded-lg border-4 border-black p-4 text-3xl leading-relaxed font-bold text-black shadow-[4px_4px_0_0_black] sm:text-4xl"
		>
			Hi, I'm Asad! A full-stack developer based in Bandung, Indonesia 🇮🇩
		</h2>

		<p
			in:fly={{ y: 25, opacity: 0, duration: 400, delay: 200 }}
			class="rounded-md border-4 border-black bg-blue-100 p-4 text-xl leading-relaxed text-black shadow-[4px_4px_0_0_black]"
		>
			I'm an experienced full-stack with a proven background spanning over 5+ years, coupled with
			valuable exposure to project and team management. My experience includes building and
			maintaining web apps, server-side APIs, cross-platform mobile apps, and browser extensions.
		</p>

		<p
			in:fly={{ y: 25, opacity: 0, duration: 400, delay: 400 }}
			class="rounded-md border-4 border-black bg-green-100 p-4 text-xl leading-relaxed text-black shadow-[4px_4px_0_0_black]"
		>
			In addition, I’ve been actively learning DevOps to expand my skill set and am eager to gain
			hands-on experience in this area.
		</p>

		<p
			in:fly={{ y: 25, opacity: 0, duration: 400, delay: 600 }}
			class="rounded-md border-4 border-black bg-pink-100 p-4 text-xl leading-relaxed text-black shadow-[4px_4px_0_0_black]"
		>
			Outside of work, I'm also active in local communities. I frequently attend local book club
			meetings and coordinate{' '}
			<a href="https://www.instagram.com/soekabahasa" class="font-bold text-blue-600 underline">
				Soekabahasa
			</a>, a foreign language conversation club, where I help organize events and improve member
			experiences.
		</p>

		<p
			in:fly={{ y: 25, opacity: 0, duration: 400, delay: 800 }}
			class="rounded-md border-4 border-black bg-purple-100 p-4 text-xl leading-relaxed text-black shadow-[4px_4px_0_0_black]"
		>
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
</section>
