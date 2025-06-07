import type { ProjectColor } from '$lib/schemas/color';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const projectColors: Record<ProjectColor, string> = {
	blue: 'bg-sky-200 text-sky-800 prose-sky dark:bg-sky-800 dark:text-sky-200',
	green: 'bg-emerald-200 text-emerald-800 prose-emerald dark:bg-emerald-800 dark:text-emerald-200',
	red: 'bg-rose-200 text-rose-800 prose-rose dark:bg-rose-800 dark:text-rose-200',
	yellow: 'bg-amber-200 text-amber-800 prose-amber dark:bg-amber-800 dark:text-amber-200',
	indigo: 'bg-indigo-200 text-indigo-800 prose-indigo dark:bg-indigo-800 dark:text-indigo-200',
	teal: 'bg-teal-200 text-teal-800 prose-teal dark:bg-teal-800 dark:text-teal-200',
	slate: 'bg-slate-200 text-slate-800 prose-slate dark:bg-slate-800 dark:text-slate-200',
	'deep-sea-green':
		'bg-deep-sea-green-200 text-deep-sea-green-800 prose-deep-sea-green dark:bg-deep-sea-green-800 dark:text-deep-sea-green-200',
	azure: 'bg-azure-200 text-azure-800 prose-azure dark:bg-azure-800 dark:text-azure-200',
	crimson:
		'bg-crimson-200 text-crimson-800 prose-crimson dark:bg-crimson-800 dark:text-crimson-200',
	purple: 'bg-purple-200 text-purple-800 prose-purple dark:bg-purple-800 dark:text-purple-200'
};
