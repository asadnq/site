import type { TechStackId } from './personal-info/tech-stack-list';
import StackIcon from 'tech-stack-icons';
import { allTechStackItems } from './personal-info/tech-stack-list';

export const TechStack = ({
  techStackId,
  size,
}: {
  techStackId: TechStackId;
  size: number;
}) => {
  const techStack = allTechStackItems.find((el) => el.id === techStackId);

  if (!techStack) {
    return <span>TechStack not found</span>;
  }

  return (
    <a href={techStack.url} target="_blank">
      <div className="flex flex-col items-center">
        {!techStack.logoId ? (
          <img
            className={`w-[${size}px] h-[${size}px]`}
            src={techStack.logo!}
            alt={techStack.name}
          />
        ) : (
          <StackIcon
            name={techStack.logoId}
            style={{
              height: size,
              width: size,
            }}
          />
        )}
      </div>
    </a>
  );
};
