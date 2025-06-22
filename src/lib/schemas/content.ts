// src/content/schemas/blog.ts
import { z } from 'zod';
import { projectColorSchema } from './color';

const slugSchema = z
	.string({
		required_error: 'Slug is required.',
		invalid_type_error: 'Slug must be a string.'
	})
	.describe('A URL-friendly unique identifier for the project.');

const contentSchema = z.string().describe('The content of the project.');

const heroImageSchema = z
	.string({
		invalid_type_error: 'Hero image path must be a string.'
	})
	.optional()
	.describe('Path to the project’s hero image (optional).');

const postSchema = z.object({
	title: z
		.string({
			required_error: 'Title is required.',
			invalid_type_error: 'Title must be a string.'
		})
		.describe('The title of the project.'),

	description: z
		.string({
			required_error: 'Description is required.',
			invalid_type_error: 'Description must be a string.'
		})
		.describe('A short summary of the project.'),
	heroImage: heroImageSchema
});

export const blogPostSchema = z.object({
	...postSchema.shape,
	publishedDate: z.coerce
		.date({
			required_error: 'Published date is required.',
			invalid_type_error: 'Published date must be a valid date.'
		})
		.describe('The date the post was published.')
});

export type BlogPost = z.infer<typeof blogPostSchema>;

export const blogPostEntrySchema = z.object({
	...blogPostSchema.shape,
	slug: slugSchema,
	content: contentSchema
});

export type BlogPostEntry = z.infer<typeof blogPostEntrySchema>;

export const projectSchema = z.object({
	...postSchema.shape,
	startDate: z.coerce
		.date({
			required_error: 'Start date is required.',
			invalid_type_error: 'Start date must be a valid date.'
		})
		.describe('The date the project was started.'),

	updatedDate: z.coerce
		.date({
			invalid_type_error: 'Updated date must be a valid date.'
		})
		.optional()
		.describe('The most recent update date for the project.'),
	techStackIds: z
		.array(z.string(), {
			invalid_type_error: 'Tech stack must be an array of strings.'
		})
		.optional()
		.describe('List of technology stack identifiers.'),

	relatedCompanies: z
		.array(z.string(), {
			invalid_type_error: 'Related companies must be an array of strings.'
		})
		.optional()
		.describe('Companies associated with this project (optional).'),
	projectType: z.enum(['personal', 'work']).default('work')
});

export const projectEntrySchema = projectSchema.extend({
	slug: slugSchema,
	content: contentSchema,
	color: projectColorSchema.default('indigo')
});

export type ProjectEntry = z.infer<typeof projectEntrySchema>;

export type Project = z.infer<typeof projectSchema>;
