import type { PageServerLoad } from './$types';
import { getAllPosts } from './utils';
import type { BlogPostEntry } from '$lib/schemas/content';

export const load: PageServerLoad = async () => {
	const posts = getAllPosts();
	return {
		posts: await Promise.all(
			posts.map(async (p) => ({
				...p,
				title: p.title ?? 'omg',
				slug: p.slug
			}))
		)
	} satisfies {
		posts: BlogPostEntry[];
	};
};
