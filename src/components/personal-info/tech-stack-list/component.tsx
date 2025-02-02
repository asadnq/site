import StackIcon from 'tech-stack-icons';
import { allTechStackItems } from './data';

export const TechStackList = () => {
  return (
    <div className="flex flex-wrap max-w-7xl gap-8 dark">
      {allTechStackItems.map((techStack) => (
        <a href={techStack.url} target="_blank">
          <div className="flex flex-col items-center">
            {!techStack.logoId ? (
              <img
                className="w-20 h-20"
                src={techStack.logo!}
                alt={techStack.name}
              />
            ) : (
              <StackIcon
                className="w-20 h-20"
                name={techStack.logoId}
                style={{
                  height: 80,
                  width: 80,
                }}
              />
            )}
            {/* <span className="text-sm font-medium text-muted-foreground">
            {techStack.name}
          </span> */}
          </div>
        </a>
      ))}
    </div>
  );
};
