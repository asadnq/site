import type { TechStackId } from './personal-info/tech-stack-list';
import StackIcon from 'tech-stack-icons';
import { allTechStackItems } from './personal-info/tech-stack-list';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export const TechStack = ({
  techStackId,
  size,
}: {
  techStackId: TechStackId;
  size: number;
}) => {
  const techStack = allTechStackItems.find((el) => el.id === techStackId);

  return (
    // <a href={techStack.url} target="_blank">
    <div className="flex flex-col items-center">
      {!techStack?.logoId ? (
        <Avatar>
          <AvatarImage
            src={techStack?.logo!}
            alt={techStack?.name ?? techStackId}
            style={{
              height: size,
              width: size,
            }}
          />
          <AvatarFallback>
            {techStackId
              .split('-')
              .map((el) => el[0].toUpperCase())
              .join('')}
          </AvatarFallback>
        </Avatar>
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
    // </a>
  );
};
