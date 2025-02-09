import { motion } from 'motion/react';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';
import { Button } from './ui/button';

const contacts = [
  {
    href: 'mailto:n.asadalhaq@gmail.com',
    icon: <IconMailFilled />,
  },
  {
    href: 'https://github.com/asadnq',
    icon: <IconBrandGithubFilled />,
  },
  {
    href: 'https://www.linkedin.com/in/asadnq/',
    icon: <IconBrandLinkedinFilled />,
  },
];

export const ContactList = () => {
  const iconClassName =
    'text-xl font-bold text-accent hover:text-accent/50 font-display duration-200 transition-all';
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      {contacts.map((el, i) => {
        return (
          <motion.a
            initial={{ y: 24, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2 * i + 1,
              ease: 'linear',
              type: 'tween',
            }}
            href={el.href}
            className={iconClassName}>
            {el.icon}
          </motion.a>
        );
      })}
      <Button>hello</Button>
    </div>
  );
};
