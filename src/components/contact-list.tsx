import { motion } from 'motion/react';
// import {
//   IconBrandGithubFilled,
//   IconBrandLinkedinFilled,
//   IconMailFilled,
// } from '@tabler/icons-react';
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { useState } from 'react';

const iconSize = 32;

const initialContacts = [
  {
    href: 'mailto:n.asadalhaq@gmail.com',
    icon: <EnvelopeClosedIcon width={iconSize} height={iconSize} />,
  },
  {
    href: 'https://github.com/asadnq',
    // icon: <IconBrandGithubFilled />,
    icon: <GitHubLogoIcon width={iconSize} height={iconSize} />,
  },
  {
    href: 'https://www.linkedin.com/in/asadnq/',
    // icon: <IconBrandLinkedinFilled />,
    icon: <LinkedInLogoIcon width={iconSize} height={iconSize} />,
  },
];

export const ContactList = () => {
  const iconClassName =
    'w-8 h-8 text-2xl font-bold hover:text-foreground/50 font-display duration-200 transition';

  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div className="flex flex-row gap-8 items-center w-full">
      {contacts.map((el, i) => {
        return (
          <motion.div
            key={i}
            initial={{
              y: 48,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.2 * i,
              ease: 'easeOut',
            }}>
            <a href={el.href} className={iconClassName}>
              {el.icon}
            </a>
          </motion.div>
        );
      })}
      {/* <Button onClick={() => setContacts(contacts.reverse())}>hello</Button> */}
    </div>
  );
};
