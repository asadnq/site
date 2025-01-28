import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
  IconArrowRight,
} from '@tabler/icons-react';

export const CardMenuList = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-8">
      <CardMenu
        title="Software projects"
        description="My professional and personal projects"
        icon={<IconArrowRight className="text-accent" />}
        href="/projects"
      />
      <CardMenu
        title="Book reviews"
        description="Check out my book reviews"
        icon={<IconArrowRight className="text-accent" />}
        href="/book-reviews"
      />
      <CardMenu
        title="Résumé"
        description="You can find my professional work experience here"
        icon={<IconArrowRight className="text-accent" />}
        href="/resume"
      />
      <CardMenu
        title="About me"
        description="Learn more about me and my interests"
        icon={<IconArrowRight className="text-accent" />}
        href="/about"
      />
    </div>
  );
};

type CardMenuProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const CardMenu = ({ title, description, icon, href }: CardMenuProps) => {
  return (
    <a href={href}>
      <div className="bg-card rounded-md px-4 py-2 cursor-pointer hover:drop-shadow-lg hover:-translate-y-2 transition-shadow transition-transform duration-300">
        <h4 className="text-xl font-bold text-primary">{title}</h4>
        <div className="flex justify-between items-center">
          <p className="text-sm text-card-foreground">{description}</p>
          {icon}
        </div>
      </div>
    </a>
  );
};
