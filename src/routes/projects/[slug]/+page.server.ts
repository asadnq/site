import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { marked } from 'marked';
import { getAllProjects, getProjectBySlug } from '../utils';

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
			content: await marked(project.content)
		}
	};
};
