import { marked } from 'marked';
import type { PageServerLoad } from './$types';
import { getAllProjects } from './utils';
import type { ProjectEntry } from '$lib/schemas/content';

export const load: PageServerLoad = async () => {
	const projects = getAllProjects();
	return {
		projects: await Promise.all(
			projects.map(async (p) => ({
				...p,
				slug: p.slug,
				content: await marked(p.content)
			}))
		)
	} satisfies {
		projects: ProjectEntry[];
	};
};
