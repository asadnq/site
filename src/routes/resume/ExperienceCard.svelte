<script lang="ts">
	import type { Experience } from '$lib/schema';

	export let experience: Experience;

	const formatDate = (date: Date | undefined) =>
		date
			? new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })
			: 'Present';
</script>

<div class="bg-surface border-outline rounded-2xl border-0 p-6 shadow-md">
	<div class="mb-2 flex items-center justify-between">
		<h3 class="text-primary text-xl font-semibold">{experience.title}</h3>
		<span
			class="rounded-full px-3 py-1 text-sm"
			class:bg-success={experience.status === 'completed'}
			class:bg-warning={experience.status === 'in-progress'}
			class:text-success={experience.status === 'completed'}
			class:text-warning={experience.status === 'in-progress'}
		>
			{experience.status === 'completed' ? 'Completed' : 'In Progress'}
		</span>
	</div>

	<p class="text-secondary mb-2 text-sm">
		{formatDate(experience.dateStart)} — {formatDate(experience.dateEnd)}
	</p>

	<p class="text-body mb-4 text-base">{experience.summary}</p>

	<ul class="mb-4 list-inside list-disc space-y-1 text-sm">
		{#each experience.responsibilities as responsibility}
			<li>{responsibility}</li>
		{/each}
	</ul>

	{#if experience.techStack?.length}
		<div class="mb-2">
			<h4 class="text-primary mb-1 text-sm font-medium">Tech Stack</h4>
			<div class="flex flex-wrap gap-2">
				{#each experience.techStack as tech}
					<span class="bg-muted rounded px-2 py-1 text-sm">{tech}</span>
				{/each}
			</div>
		</div>
	{/if}

	{#if experience.projects?.length}
		<div class="mt-3">
			<h4 class="text-primary mb-1 text-sm font-medium">Projects</h4>
			<ul class="list-inside list-disc text-sm">
				{#each experience.projects as project}
					<li>{project}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
