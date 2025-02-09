import { motion } from 'motion/react';
import { ContactList } from './contact-list';

export const Banner = () => {
  return (
    <section className="min-h-full flex-1 flex flex-col gap-y-4 md:gap-y-8 justify-center items-center px-12 py-8">
      <div className="flex flex-col gap-y-4">
        <motion.span
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative left-[-40px] text-2xl font-bold text-foreground font-display-2 leading-loose">
          👋 Hi there,
        </motion.span>
        <motion.h1
          transition={{ duration: 0.5 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="text-7xl sm:text-9xl font-extrabold font-display">
          I'm Asad
        </motion.h1>
        <motion.p
          transition={{ duration: 0.7 }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="relative left-[40px] text-xl font-regular">
          A <span className="font-bold text-secondary">software developer</span>{' '}
          with a passion for literature, languages, and community.
        </motion.p>
      </div>
      <div>
        <ContactList />
      </div>
    </section>
  );
};
