import type { TechStackId } from './personal-info/tech-stack-list';
import { TechStack } from './tech-stack';

export interface ProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  id: string;
  techStackIds: TechStackId[];
}

export function ProjectCard({
  title,
  description,
  repoLink: link,
  id,
  techStackIds,
}: ProjectCardProps) {
  return (
    <div className="w-full h-full min-h-[175px] rounded-md shadow-lg drop-shadow-lg bg-gradient-to-tr from-primary via-card to-secondary p-1 hover:animate-gradient">
      {/* <a href={`/projects/${id}`}> */}
      <div className="flex flex-col justify-between items-stretch h-full px-4 py-2.5 rounded-lg bg-background/85 backdrop-blur-xl">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-accent">{title}</h2>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="flex flex-row items-center gap-x-4 justify-end">
          {techStackIds.map((techStackId) => (
            <TechStack techStackId={techStackId} size={24} />
          ))}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
