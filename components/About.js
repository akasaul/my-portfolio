import { useState } from 'react';
import { MdDownload, MdExpandLess, MdExpandMore } from 'react-icons/md';
import { motion } from 'framer-motion';

const About = () => {
  const [expand, setExpand] = useState(false);
  return (
    <motion.section
      animate={{
        y: 20,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        y: 0,
      }}
      id='about'
      className='pt-6 my-20'
    >
      <h2 className='mb-2 font-bold text-center text-fs5 dark:text-headerDark text-solidHeading'>
        About Me
      </h2>

      <p className='text-fs2 text-darkContent dark:text-lightContext text-justify max-w-[900px] mx-auto mb-10'>
        Hi there, thanks for visiting my Portfolio. I am a 20 years old Junior
        Full stack developer specializing mostly in Javascript. I am also a 3rd
        Year IT student at BDU, Poly Campus. Around 8 months ago I started this
        Journey, though it was challenging since day one it was also genuinely
        satisfying and something that I ended up loving and doing every day. I
        am currently looking forward for an internship this summer, so I am open
        to communicate with any tech company that is interested.
        {expand && (
          <span className='block mt-2'>
            As a kid I used to practice 3d modelling (using blender) but never
            thought I would end up coding. I started coding as a part of school
            curriculum and well, I found It so addictive. I always consider
            myself to be more frontend oriented but I am also quite comfortable
            with backend technologies. If by any chance you are not bored made
            it here thank you for going through my Portfolio and Feel free to
            contact me any way possible, any time.
          </span>
        )}
        {expand ? (
          <button
            onClick={() => setExpand((prev) => !prev)}
            className='flex items-center gap-2 mx-auto mt-2 btn'
          >
            Less <MdExpandLess />
          </button>
        ) : (
          <button
            onClick={() => setExpand((prev) => !prev)}
            className='flex items-center gap-2 mx-auto mt-2 btn'
          >
            More <MdExpandMore />{' '}
          </button>
        )}
      </p>

      <a href='/files/internship_doc.pdf' download>
        <button className='flex items-center gap-2 mx-auto mt-2 btn'>
          Download Intership Request pdf <MdDownload />
        </button>
      </a>
    </motion.section>
  );
};

export default About;
