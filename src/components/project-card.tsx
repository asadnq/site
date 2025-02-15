import type { Project } from '@/types';
import { TechStack } from './tech-stack';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project & { id: string };
}

const maxVisibleTechStacks = 3 as const;

export function ProjectCard({
  project: { title, description, repoLink: link, id, techStackIds },
}: ProjectCardProps) {
  const remainingTechStacks = techStackIds.length - maxVisibleTechStacks;
  const techStackComponent = techStackIds && (
    <div className="flex flex-row items-center gap-x-4 justify-end">
      {techStackIds.slice(0, maxVisibleTechStacks).map((techStackId) => (
        <TechStack techStackId={techStackId} size={24} key={techStackId} />
      ))}
      {remainingTechStacks > 0 && <Badge>+{remainingTechStacks}</Badge>}
    </div>
  );

  return (
    <a
      href={`/projects/${id}/`}
      // className="w-full h-full min-h-[175px] rounded-md shadow-lg drop-shadow-lg bg-gradient-to-tr from-primary via-card to-secondary p-1 hover:animate-gradient"
      className="w-full h-full min-h-[175px] rounded-md shadow-lg drop-shadow-lg p-1 bg-card/50">
      {/* <a href={`/projects/${id}`}> */}
      <div className="flex flex-col justify-between items-stretch h-full px-4 py-2.5 rounded-lg bg-background/75 backdrop-blur-xl">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {techStackComponent}
      </div>
      {/* </a> */}
    </a>
  );
}
