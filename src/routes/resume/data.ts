import type { Experience } from '$lib/schema';

export const WORK_EXPERIENCES: Experience[] = [
	{
		dateStart: new Date('2022-11-01'),
		title: 'Full-stack Developer',
		summary: 'Rewriting the entire Spacetoon Go system from scratch',
		responsibilities: [
			"Actively participated in the inception and architectural blueprinting of the Spacetoon Go app's total rewrite driving the project towards a robust implementation",
			'Involved in the migration of millions of records from old system to the new one',
			'Involved in development and code review of both backend and front-end applications'
		],
		status: 'in-progress',
		techStack: [
			'Graphql',
			'TypeScript',
			'Node.js',
			'NestJS',
			'PostgreSQL',
			'Flutter',
			'Next.js',
			'React',
			'Tailwind',
			'Turbo repo',
			'Docker'
		]
	},
	{
		dateStart: new Date('2021-07-01'),
		dateEnd: new Date('2022-10-01'),
		title: 'Junior Tech Lead',
		summary: 'Building the FoodLama browser extension from the ground up',
		responsibilities: [
			'Led a small team of developers to build the FoodLama browser extension from its nascent',
			'Developed the core module that analyzes a food product and assesses its compatibility against 22 dietary preferences',
			'Engineered a robust browser extension architecture that seamlessly functions across 3 diverse retailer websites, enabling swift and effortless integration for future retailer support'
		],
		status: 'completed',
		techStack: [
			'TypeScript',
			'Node.js',
			'Express',
			'NestJS',
			'PostgreSQL',
			'MongoDB',
			'React',
			'Browser extension'
		]
	},
	{
		dateStart: new Date('2021-01-01'),
		dateEnd: new Date('2021-06-01'),
		title: 'Junior Full-Stack Developer',
		summary: 'Building the CourseGate MVP app using Flutter and Firebase',
		responsibilities: [
			'Developed CourseGate MVP app using Flutter and Firebase',
			'Refactored the codebase to implement BLoC architecture'
		],
		status: 'completed',
		techStack: ['Flutter', 'Firebase', 'ReactiveX']
	},
	{
		dateStart: new Date('2020-06-01'),
		dateEnd: new Date('2021-04-01'),
		title: 'React Tutor',
		summary: 'Tutoring bootcamp students, corporate training, and webinar',
		responsibilities: [
			'Involved in tutoring bootcamp students, corporate training, and webinar',
			'Taught react js and react native concepts, state management, and some basic usage of common libraries',
			'Provide students an extra session to help them catch-up with the curriculum'
		],
		status: 'completed',
		techStack: ['React', 'React Native', 'JavaScript']
	},
	{
		dateStart: new Date('2019-06-01'),
		dateEnd: new Date('2020-12-01'),
		title: 'Software Engineer',
		summary: 'Developing PRUForce modules using React JS',
		responsibilities: [
			'Developed Leads management of PRUForce mobile app modules using React JS and Cordova, it later adopted by the higher regional app',
			'Assist production deployment that occurs every 2 weeks',
			'Refactored class-based components into functional components with React hooks'
		],
		status: 'completed',
		techStack: ['React', 'Redux', 'Redux Saga']
	}
];
