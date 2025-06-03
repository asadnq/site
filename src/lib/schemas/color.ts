import { z } from 'zod';

export const projectColorSchema = z.enum([
	'blue',
	'green',
	'red',
	'yellow',
	'indigo',
	'teal',
	'slate',
	'deep-sea-green',
	'azure',
	'crimson',
	'purple'
]);
export type ProjectColor = z.infer<typeof projectColorSchema>;
