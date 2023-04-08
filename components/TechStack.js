import { poppins } from '../fonts/fonts';
import { technologies } from '@/utils/technologies';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useRef } from 'react';

const TechStack = () => {
  const constraint = useRef(null);
  return (
    <motion.div 
    ref={constraint}
     animate={{
      y: 20
     }}

     transition={{
      duration: 1
     }}

     whileInView={{
      y:-10
     }}

     className={`${poppins.className}`} id='tech-stack'>
      <h2 className='text-fs5 dark:text-headerDark font-bold text-solidHeading text-center mb-2'>My Tech Stack</h2>
      <p className='text-fs2 text-darkContent dark:text-lightContext text-center mb-10'>Technologies I&apos;ve been working with recently (try dragging them)</p>
      
      <div className='grid gap-5 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 items-center justify-center cursor-move'>
        {
          technologies.map(src => (
            <Image key={src} src={`/tech/${src}`} className='sm:w-[80px] hover:scale-110 cursor-pointer transition-all duration-300 w-[50px]' width={80} height={80} alt={src}/>
          ))
        }
      </div>
    </motion.div>
  )
}

export default TechStack