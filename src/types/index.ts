import { z } from 'astro/zod';

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  startDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  techStackIds: z.array(z.string()),
  repoLink: z.string().url().optional(),
  relatedCompanies: z.string().array().optional(),
});

export type Project = z.infer<typeof projectSchema>;
