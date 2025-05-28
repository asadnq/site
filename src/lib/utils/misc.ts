export function getDurationString(start: Date, end?: Date): string {
	const d1 = new Date(start);
	const d2 = end ? new Date(end) : new Date();

	const months = d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	let result = '';
	if (years) result += `${years} yr${years > 1 ? 's' : ''}`;
	if (remainingMonths)
		result += `${years ? ' ' : ''}${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
	return result || 'Less than a month';
}
