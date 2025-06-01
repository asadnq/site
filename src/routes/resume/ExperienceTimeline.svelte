<script lang="ts">
	import type { Experience } from '$lib/schemas';
	import { getDurationString } from '$lib/utils/misc';

	export let experiences: Experience[] = [];

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

<div class="flex flex-col gap-12">
	{#each experiences as exp, i}
		<div class="grid grid-cols-[1fr] gap-x-4 md:grid-cols-[200px_15px_1fr] md:grid-rows-1">
			<!-- Date (only on md and up) -->
			<div class="hidden flex-col items-end pr-2 text-right md:flex">
				<span class="text-sm font-semibold">
					{formatDateRange(exp.dateStart, exp.dateEnd, exp.status)}
				</span>
				<span class="text-surface-100 text-xs font-medium">
					{getDurationString(exp.dateStart, exp.dateEnd)}
				</span>
			</div>

			<div class="relative flex-col items-center md:flex hidden">
				<div class="bg-primary-500 z-10 size-4 rounded-full"></div>
				{#if i < experiences.length - 1}
					<div
						class="bg-primary-300 absolute top-4 left-2 h-[calc(100%+3rem)] w-px md:left-[50%]"
					></div>
				{/if}
			</div>

			<!-- Content -->
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
					<h3 class="text-surface-100 text-xl font-extrabold">{exp.title}</h3>
					<p class="mt-1 text-sm">{exp.summary}</p>
				</div>

				<!-- Responsibilities -->
				<div class="flex flex-col gap-y-2">
					<h4 class="text-surface-100 text-base font-medium">Responsibilities</h4>
					<ul class="marker:text-foreground list-inside list-disc space-y-1 text-sm">
						{#each exp.responsibilities as responsibility}
							<li>{responsibility}</li>
						{/each}
					</ul>
				</div>

				<!-- Tech Stack -->
				{#if exp.techStack?.length}
					<div class="flex flex-col gap-y-2">
						<h4 class="text-surface-100 text-base font-medium">Tech Stack</h4>
						<div class="flex flex-wrap gap-2">
							{#each exp.techStack as tech}
								<span class="badge preset-tonal-surface px-2 py-1 text-sm">{tech}</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Projects -->
				{#if exp.projects?.length}
					<div class="flex flex-col gap-y-2">
						<h4 class="text-surface-100 text-base font-medium">Projects</h4>
						<ul class="marker:text-foreground list-inside list-disc space-y-1 text-sm">
							{#each exp.projects as project}
								<li>{project}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
