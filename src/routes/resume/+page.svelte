<script lang="ts">
	import { WORK_EXPERIENCES } from './data';
	import type { Experience } from '$lib/schemas';
	import { getDurationString } from '$lib/utils/misc';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import ExperienceItem from './ExperienceItem.svelte';

	const experiences: Experience[] = WORK_EXPERIENCES;

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short'
	});

	const formatDateRange = (start: Date, end: Date | undefined, status: Experience['status']) => {
		const startStr = dateFormatter.format(new Date(start));
		const endStr = status === 'completed' && end ? dateFormatter.format(new Date(end)) : 'Now';
		return `${startStr} – ${endStr}`;
	};
</script>

<svelte:head>
	<title>My Experiences</title>
</svelte:head>

<SectionCard className="bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200">
	<h1>Experience</h1>
	{#each experiences as exp, i}
		<div
			class="border-surface-950-50 grid grid-cols-[1fr] gap-x-4 border-b-2 pb-4 last:border-b-0 sm:border-b-0 sm:pb-0 md:grid-cols-[200px_15px_1fr] md:grid-rows-1"
		>
			<!-- Date (only on md and up) -->
			<div class="hidden flex-col items-end pr-2 text-right md:flex">
				<span class="text-sm font-semibold">
					{formatDateRange(exp.dateStart, exp.dateEnd, exp.status)}
				</span>
				<span class="text-xs font-medium text-emerald-800 dark:text-emerald-200">
					{getDurationString(exp.dateStart, exp.dateEnd)}
				</span>
			</div>

			<div class="relative hidden flex-col items-center md:flex">
				<div class="z-10 size-4 rounded-full bg-emerald-900 dark:bg-emerald-100"></div>
				{#if i < experiences.length - 1}
					<div
						class="absolute top-3 h-[calc(100%+1rem)] w-[3px] bg-emerald-900 md:left-[calc(50%-1px)] dark:bg-emerald-100"
					></div>
				{/if}
			</div>

			<!-- Content -->
			<ExperienceItem {exp} />
		</div>
	{/each}
</SectionCard>
