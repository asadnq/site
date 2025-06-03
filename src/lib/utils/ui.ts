import type { ProjectColor } from '$lib/schemas/color';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const projectColors: Record<ProjectColor, string> = {
	blue: 'bg-sky-200 text-sky-800 prose-sky',
	green: 'bg-emerald-200 text-emerald-800 prose-emerald',
	red: 'bg-rose-200 text-rose-800 prose-rose',
	yellow: 'bg-amber-200 text-amber-800 prose-amber',
	indigo: 'bg-indigo-200 text-indigo-800 prose-indigo',
	teal: 'bg-teal-200 text-teal-800 prose-teal',
	slate: 'bg-slate-200 text-slate-800 prose-slate',
	'deep-sea-green': 'bg-deep-sea-green-200 text-deep-sea-green-800 prose-deep-sea-green',
	azure: 'bg-azure-200 text-azure-800 prose-azure',
	crimson: 'bg-crimson-200 text-crimson-800 prose-crimson',
	purple: 'bg-purple-200 text-purple-800 prose-purple'
};
