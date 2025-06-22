import type { EntryGenerator, PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getAllPosts, getPostBySlug } from '../utils';
import { transformContent } from '$lib/utils/content';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getAllPosts().map((project) => ({
		slug: project.slug
	}));
};

export const load: PageServerLoad = async ({ params }) => {
	const project = getPostBySlug(params.slug);
	if (!project) throw error(404, 'Project not found');

	const content = await transformContent(project.content);

	return {
		blog: {
			...project,
			content: content.value
		}
	};
};
