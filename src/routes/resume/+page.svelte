<script lang="ts">
	import type { Experience } from '$lib/schema';
	import ExperienceCard from './ExperienceCard.svelte';
	import ExperienceTimeline from './ExperienceTimeline.svelte';
	import { WORK_EXPERIENCES } from './data';
</script>

<div class="space-y-6">
	<!-- {#each WORK_EXPERIENCES as experience}
		<ExperienceCard {experience} />
	{/each} -->
	<ExperienceTimeline experiences={WORK_EXPERIENCES} />
</div>
