import { blogPostEntrySchema } from '$lib/schemas/content';
import type { BlogPostEntry } from '$lib/schemas/content';
import matter from 'gray-matter';

const files = import.meta.glob('../../content/blog/*.md', {
	as: 'raw',
	eager: true
});

export function getAllPosts(): BlogPostEntry[] {
	return Object.entries(files).map(([path, raw]) => {
		const slug = path.split('/').pop()?.replace('.md', '') as string;
		const { data, content } = matter(raw as string);
		const parsed = blogPostEntrySchema.parse({
			...data,
			slug,
			content
		});

		return parsed;
	});
}

export function getPostBySlug(slug: string): BlogPostEntry | undefined {
	return getAllPosts().find((p) => p.slug === slug);
}
