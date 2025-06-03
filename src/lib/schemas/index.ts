import { z } from 'zod';

export type Experience = {
	title: string;
	summary: string;
	responsibilities: string[];
	status: 'completed' | 'in-progress';
	techStack?: string[];
	projects?: string[];
	dateStart: Date;
	dateEnd?: Date;
};

export const projectSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	startDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	techStackIds: z.array(z.string()),
	repoLink: z.string().url().optional(),
	relatedCompanies: z.string().array().optional()
});

export type Project = z.infer<typeof projectSchema>;
