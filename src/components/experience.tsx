import { Timeline, TimelineItem } from './timeline/timeline';
import { Check } from 'lucide-react';
export const ExperienceTimeline = () => {
  const items = [
    {
      title: '2022',
      cardTitle: 'Fullstack Developer',
      cardSubtitle: 'Cloud Thought LTD',
      cardDetailedText: [
        "Actively participated in the inception and architectural blueprinting of the Spacetoon Go app's total rewrite driving the project towards a robust implementation",
        'Involved in the migration of millions of records from old system to the new one',
        'Involved in development and code review of both backend and front-end applications',
      ],
    },
  ];

  return (
    <Timeline>
      <TimelineItem
        date={new Date('2024-01-01').toString()}
        title="Feature Released"
        description="New timeline component is now available"
        icon={<Check />}
        status="completed"
      />
      <TimelineItem
        date={new Date('2024-01-02').toString()}
        title="In Progress"
        description="Working on documentation"
        status="in-progress"
      />
      <TimelineItem
        date={new Date('2024-01-03').toString()}
        title="Upcoming"
        description="Planning future updates"
        status="pending"
      />
    </Timeline>
  );
};
