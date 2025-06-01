import { type ProjectEntry, projectEntrySchema } from '$lib/schemas/content';
import matter from 'gray-matter';

const files = import.meta.glob('/src/content/projects/*.md', {
	as: 'raw',
	eager: true
});

export function getAllProjects(): ProjectEntry[] {
	return Object.entries(files).map(([path, raw]) => {
		const slug = path.split('/').pop()?.replace('.md', '') as string;
		const { data, content } = matter(raw as string);
		const parsed = projectEntrySchema.parse({
			...data,
			slug,
			content
		});

		return parsed;
	});
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return getAllProjects().find((p) => p.slug === slug);
}
