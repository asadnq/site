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
