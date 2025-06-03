<script lang="ts">
	import type { Experience } from '$lib/schemas';
	import { formatDateRange, getDurationString } from '$lib/utils/misc';

	export let exp: Experience;
</script>

<div class="flex flex-col gap-y-4 ps-0">
	<!-- Date (on mobile only) -->
	<div class="flex flex-col md:hidden">
		<span class="text-base font-semibold">
			{formatDateRange(exp.dateStart, exp.dateEnd, exp.status)}
		</span>
		<span class="text-sm font-medium">
			{getDurationString(exp.dateStart, exp.dateEnd)}
		</span>
	</div>

	<!-- Title and Summary -->
	<div>
		<h3 class="text-xl font-black text-black">{exp.title}</h3>
		<p class="mt-1 text-sm">{exp.summary}</p>
	</div>

	<!-- Responsibilities -->
	<div class="flex flex-col gap-y-2">
		<h4 class="text-emerald-950 text-base font-bold">Responsibilities</h4>
		<ul class="marker:text-foreground list-inside list-disc space-y-1 text-sm">
			{#each exp.responsibilities as responsibility}
				<li>{responsibility}</li>
			{/each}
		</ul>
	</div>

	<!-- Tech Stack -->
	{#if exp.techStack?.length}
		<div class="flex flex-col gap-y-2">
			<h4 class="text-emerald-950 text-base font-bold">Tech Stack</h4>
			<div class="flex flex-wrap gap-2">
				{#each exp.techStack as tech}
					<span class="badge bg-indigo-200 px-2 py-1 text-sm text-indigo-800">{tech}</span>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Projects -->
	{#if exp.projects?.length}
		<div class="flex flex-col gap-y-2">
			<h4 class="text-emerald-950 text-base font-bold">Projects</h4>
			<ul class="marker:text-foreground list-inside list-disc space-y-1 text-sm">
				{#each exp.projects as project}
					<li>{project}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
