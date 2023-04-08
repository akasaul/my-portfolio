import { useState } from "react"
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { motion } from 'framer-motion'

const About = () => {
  const [expand, setExpand] = useState(false);
  return (
    <motion.section 
      animate={{
        y: 20
      }}

      transition={{
        duration: 1, 
        delay: 1
      }}

      whileInView={{
        y:-10
      }}
      id='about' className="my-20 pt-4">
      <h2 className='text-fs5 dark:text-headerDark font-bold text-solidHeading text-center mb-2'>About Me</h2>


      <p className='text-fs2 text-darkContent dark:text-lightContext text-justify max-w-[900px] mx-auto mb-10'>
        First off, thanks for visiting my Portfolio. I am a 20 years old Junior Full stack developer specializing mostly in Javascript.
        I am also a 3rd Year IT student at BDU, Poly Campus.
        Around 8 months ago I started this Journey, though it was challenging since day one it was also genuinely satisfying and something that I ended up loving and doing every day.
        I am currently looking forward for an internship this summer, so I am open to communicate with any tech company that is interested.
        {
          expand && <span className="mt-2 block">As a kid I used to practice 3d modelling (using blender) but never thought I would end up coding. I started coding as a part of school curriculum and well, I found It so addictive. I always consider myself to be more frontend oriented but I am also quite comfortable with backend technologies.
          
          If by any chance you are not bored reached here thank you for going through my Portfolio and I hope you will check me back some time soon :)</span>
        }

        {
          expand ? 
          <button onClick={() => setExpand(prev => !prev)} className="flex items-center mt-2 mx-auto gap-2 btn">Less <MdExpandLess /></button> : 
          <button onClick={() => setExpand(prev => !prev)} className="flex items-center mt-2 mx-auto gap-2 btn">More <MdExpandMore /> </button>
        }


      </p>


    </motion.section>
  )
}

export default About