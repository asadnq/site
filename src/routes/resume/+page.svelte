<script lang="ts">
	import ExperienceTimeline from './ExperienceTimeline.svelte';
	import { WORK_EXPERIENCES } from './data';
	import { page } from '$app/state';
	const isRoot = $derived(page.url.pathname !== '/');
</script>

<section class="flex flex-col space-y-12">
	<h2 class="h2 font-sans" class:text-white={isRoot} class:text-primary={!isRoot}>Experience</h2>
	<ExperienceTimeline experiences={WORK_EXPERIENCES} />
</section>
