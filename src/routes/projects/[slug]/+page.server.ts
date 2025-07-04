import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { getAllProjects, getProjectBySlug } from '../utils';
import { transformContent } from '$lib/utils/content';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getAllProjects().map((project) => ({
		slug: project.slug
	}));
};

export const load: PageServerLoad = async ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) throw error(404, 'Project not found');

	return {
		project: {
			...project,
			content: (await transformContent(project.content)).value
		}
	};
};
