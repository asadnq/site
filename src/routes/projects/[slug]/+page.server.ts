import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import { getProjectBySlug } from '../utils';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) throw error(404, 'Project not found');

	return {
		project: {
			...project,
			content: await marked(project.content)
		}
	};
};
