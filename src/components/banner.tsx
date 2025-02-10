import { motion } from 'motion/react';
import { ContactList } from './contact-list';
import { useState } from 'react';

export const Banner = () => {
  const [displayContacts, setDisplayContacts] = useState(false);
  return (
    <section className="min-h-full flex-1 flex flex-col gap-y-4 md:gap-y-8 justify-center items-center px-12 py-8">
      <div className="flex flex-col gap-y-4">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative left-[-40px] text-2xl font-bold text-foreground font-display-2 leading-loose">
          👋 Hi there,
        </motion.span>
        <motion.h1
          transition={{ delay: 0.5, duration: 0.3 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-7xl sm:text-9xl ">
          <span className="font-thin">I'm</span>{' '}
          <span className="font-display">Asad</span>
        </motion.h1>
        <motion.p
          transition={{ delay: 1.2, duration: 0.3 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1, type: 'spring' }}
          className="relative left-[40px] text-xl font-regular"
          onAnimationComplete={() =>
            setTimeout(() => setDisplayContacts(true), 300)
          }>
          A <span className="font-bold text-secondary">software developer</span>{' '}
          with a passion for literature, languages, and community.
        </motion.p>
      </div>
      <div className="h-[48px]">{displayContacts && <ContactList />}</div>
    </section>
  );
};
