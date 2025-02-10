import { motion } from 'motion/react';
// import {
//   IconBrandGithubFilled,
//   IconBrandLinkedinFilled,
//   IconMailFilled,
// } from '@tabler/icons-react';
import { Button } from './ui/button';
import { useState } from 'react';

const initialContacts = [
  {
    href: 'mailto:n.asadalhaq@gmail.com',
    // icon: <IconMailFilled />,
  },
  {
    href: 'https://github.com/asadnq',
    // icon: <IconBrandGithubFilled />,
  },
  {
    href: 'https://www.linkedin.com/in/asadnq/',
    // icon: <IconBrandLinkedinFilled />,
  },
];

export const ContactList = () => {
  const iconClassName =
    'text-xl font-bold text-accent hover:text-accent/50 font-display duration-200 transition';

  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div className="flex flex-row gap-4 items-center w-full">
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
              duration: 0.3 * (i + 1),
              ease: 'easeOut',
            }}>
            {/* {el.icon} */}
            <a className={iconClassName} href={el.href}>
              aaa
            </a>
          </motion.div>
        );
      })}
      {/* <Button onClick={() => setContacts(contacts.reverse())}>hello</Button> */}
    </div>
  );
};
