import { motion } from 'motion/react';

export const AboutSection = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-3 gap-4">
      <div className="flex flex-col col-span-2 col-start-1 row-start-2 sm:row-start-1">
        <motion.h2
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-3xl leading-loose font-medium col-span-2 row-start-1 font-display-2">
          Hi, I'm Asad! A full-stack developer based in Bandung, Indonesia 🇮🇩
        </motion.h2>
        <div className="h-8"></div>
        <motion.p
          className="text-foreground text-xl leading-relaxed col-span-2 row-start-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          I'm an experienced full-stack with a proven background spanning over
          5+ years, coupled with valuable exposure to project and team
          management. My experience include building and maintaining web-app,
          server-side API, cross-platform mobile app, and browser extensions.
          I’ve built and maintained web apps, server-side APIs, cross-platform
          mobile apps, and browser extensions.
        </motion.p>
        <div className="h-4"></div>
        <motion.p
          className="text-foreground text-xl leading-relaxed col-span-2 row-start-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}>
          In addition, I’ve been actively learning DevOps to expand my skill set
          and am eager to gain hands-on experience in this area.
        </motion.p>
        <div className="h-4"></div>
        <motion.p
          className="text-foreground text-xl leading-relaxed col-span-2 row-start-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}>
          Outside of work, I'm also active in local communities. I frequently
          attend local bookclub meetings where I share about my reading journey,
          and listen to the stories of others. I'm also a coordinator of a
          foreign language conversation club,{' '}
          <a
            href="https://www.instagram.com/soekabahasa"
            className="text-accent font-bold">
            Soekabahasa
          </a>
          , where I help to organize the club's events, activities and
          continuously reviewing and suggesting ideas to improve the club's
          experience.
        </motion.p>
        <div className="h-4"></div>
        <motion.p
          className="text-foreground text-xl leading-relaxed col-span-2 row-start-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}>
          In my spare time, you can find me reading books, writing, learning
          language, or running.
        </motion.p>
      </div>
      <motion.img
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75, ease: 'circOut' }}
        src="/whats-this.png"
        className="rounded-full row-start-1 w-64 sm:w-80"
        width="auto"
      />
    </div>
  );
};
