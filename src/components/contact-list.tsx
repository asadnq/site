import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';

export const ContactList = () => {
  const iconClassName =
    'text-xl font-bold text-accent hover:text-accent/50 font-display duration-200 transition-all';
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      <a href="mailto:n.asadalhaq@gmail.com" className={iconClassName}>
        <IconMailFilled />
      </a>
      <a href="https://github.com/asadnq" className={iconClassName}>
        <IconBrandGithubFilled />
      </a>
      <a href="https://www.linkedin.com/in/asadnq/" className={iconClassName}>
        <IconBrandLinkedinFilled />
      </a>
    </div>
  );
};
