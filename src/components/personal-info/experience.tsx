import { Badge } from '../ui/badge';

export const ExperienceTimeline = () => {
  return (
    <div className="flex flex-col">
      {WORK_EXPERIENCES.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  );
};

const ExperienceItem = ({
  dateStart,
  dateEnd,
  title,
  summary,
  responsibilities,
  techStack,
  status,
}: ExperienceProps) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  });

  const dateString = `${dateFormatter.format(dateStart)} - ${
    status === 'completed' ? dateFormatter.format(dateEnd) : 'Now'
  }`;

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className="flex flex-col gap-y-2">
        <h4 className="text-base font-medium text-secondary">{title}</h4>
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-row">
      <div className="flex-[1] flex flex-col gap-y-2 pe-4">
        <span className="text-base font-semibold text-foreground">
          {dateString}
        </span>
        {/* total duration */}
        <span className="text-muted-foreground font-medium text-sm">
          {getDuration(dateStart, dateEnd)}
        </span>
      </div>
      <div className="flex-[7] items-end relative gap-y-2  before:content-[''] before:bg-accent before:w-4 before:h-4 before:rounded-full before:absolute before:top-0 before:-left-2">
        <div className="flex flex-col border-s border-border gap-y-4 my-8 ps-8 h-[80%]">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-xl font-semibold text-gradient">{title}</h3>
            <p className="text-sm text-foreground">{summary}</p>
          </div>
          <Section title="Responsibilities">
            <ul className="md:w-2/4 list-disc list-inside">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="text-sm font-medium text-muted-foreground marker:text-foreground">
                  {responsibility}
                </li>
              ))}
            </ul>
          </Section>
          {/* Tech stack */}
          <Section title="Tech Stack">
            <div className="md:w-2/4 flex flex-wrap gap-x-2 gap-y-2">
              {techStack?.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

type ExperienceProps = {
  title: string;
  summary: string;
  responsibilities: string[];
  status: 'completed' | 'in-progress';
  techStack?: string[];
  projects?: string[];
  dateStart: Date;
  dateEnd?: Date;
};

const WORK_EXPERIENCES: ExperienceProps[] = [
  {
    dateStart: new Date('2022-11-01'),
    title: 'Full-stack Developer',
    summary: 'Rewriting the entire Spacetoon Go system from scratch',
    responsibilities: [
      "Actively participated in the inception and architectural blueprinting of the Spacetoon Go app's total rewrite driving the project towards a robust implementation",
      'Involved in the migration of millions of records from old system to the new one',
      'Involved in development and code review of both backend and front-end applications',
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
      'Docker',
    ],
  },
  {
    dateStart: new Date('2021-07-01'),
    dateEnd: new Date('2022-10-01'),
    title: 'Junior Tech Lead',
    summary: 'Building the FoodLama browser extension from the ground up',
    responsibilities: [
      'Led a small team of developers to build the FoodLama browser extension from its nascent',
      'Developed the core module that analyzes a food product and assesses its compatibility against 22 dietary preferences',
      'Engineered a robust browser extension architecture that seamlessly functions across 3 diverse retailer websites, enabling swift and effortless integration for future retailer support',
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
      'Browser extension',
    ],
  },
  {
    dateStart: new Date('2021-01-01'),
    dateEnd: new Date('2021-06-01'),
    title: 'Junior Full-Stack Developer',
    summary: 'Building the CourseGate MVP app using Flutter and Firebase',
    responsibilities: [
      'Developed CourseGate MVP app using Flutter and Firebase',
      'Refactored the codebase to implement BLoC architecture',
    ],
    status: 'completed',
    techStack: ['Flutter', 'Firebase', 'ReactiveX'],
  },
  {
    dateStart: new Date('2020-06-01'),
    dateEnd: new Date('2021-04-01'),
    title: 'React Tutor',
    summary: 'Tutoring bootcamp students, corporate training, and webinar',
    responsibilities: [
      'Involved in tutoring bootcamp students, corporate training, and webinar',
      'Taught react js and react native concepts, state management, and some basic usage of common libraries',
      'Provide students an extra session to help them catch-up with the curriculum',
    ],
    status: 'completed',
    techStack: ['React', 'React Native', 'JavaScript'],
  },
  {
    dateStart: new Date('2019-06-01'),
    dateEnd: new Date('2020-12-01'),
    title: 'Software Engineer',
    summary: 'Developing PRUForce modules using React JS',
    responsibilities: [
      'Developed Leads management of PRUForce mobile app modules using React JS and Cordova, it later adopted by the higher regional app',
      'Assist production deployment that occurs every 2 weeks',
      'Refactored class-based components into functional components with React hooks',
    ],
    status: 'completed',
    techStack: ['React', 'Redux', 'Redux Saga'],
  },
];

const getDuration = (start: Date, end?: Date) => {
  const _end = end ?? new Date();

  const year = _end.getFullYear() - start.getFullYear();
  const month = _end.getMonth() - start.getMonth();

  return `${year !== 0 ? `${year} years` : ''} ${
    month !== 0 ? `${month} months` : ''
  }`;
};
