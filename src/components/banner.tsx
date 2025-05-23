import { motion } from 'motion/react';
import { ContactList } from './contact-list';
import { useState } from 'react';

let animationStep = 0;
const delay = 0.3;

export const Banner = () => {
  const [displayContacts, setDisplayContacts] = useState(false);
  return (
    <section className="min-h-full flex-1 flex flex-col gap-y-4 md:gap-y-8 justify-center items-center px-12 py-8">
      <div className="flex flex-col gap-y-4">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: animationStep++ * delay, duration: 0.3 }}
          className="relative left-[-40px] text-2xl font-bold text-foreground font-display-2 leading-loose">
          👋 Hi there,
        </motion.span>
        <motion.h1
          transition={{ delay: animationStep++ * delay, duration: 0.3 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-7xl sm:text-9xl ">
          <span className="font-thin">I'm</span>{' '}
          <span className="font-display">Asad</span>
        </motion.h1>
        <motion.p
          transition={{ delay: animationStep++ * delay, duration: 0.3 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, type: 'spring' }}
          className="relative left-[40px] text-xl font-regular text-center"
          onAnimationComplete={() =>
            setTimeout(() => setDisplayContacts(true), 300)
          }>
          A{' '}
          <span className="font-bold text-secondary ">
            full-stack developer
          </span>{' '}
          with 5+ years of experience in the professional industry
          <br /> Based in Bandung, Indonesia 🇮🇩
        </motion.p>
      </div>
      <div className="h-[48px]">{displayContacts && <ContactList />}</div>
    </section>
  );
};
