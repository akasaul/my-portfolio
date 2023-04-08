import Image from "next/image"
import { poppins } from '../fonts/fonts'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1,
      y: 0
    }} 

    transition={{
      duration: 1
    }}

    animate={{
      y: 100
    }}
    className={`${poppins.className} justify-between flex my-20 flex-col sm:flex-row gap-5 items-center font-bold`}>
     
      <h1 className="text-solidHeading lg:text-fs7 text-fs5 xs:text-fs6 dark:text-headerDark">
        <span className="block">
          Hi  👋, 
        </span>
        <span className="block">
          My name is 
        </span>
        <span className="block hero-gradient">
        
          <TypeAnimation sequence={[
            'Nikodimos Jemaneh'
          ]} 
            cursor={true}
          />
          
        </span>
        I build <span className="hero-gradient">
          
          <TypeAnimation sequence={[
              'Frontend', 
              2000,
              'Backend',
              2500,
              'Web', 
              2700
            ]} 
              cursor={true}
            />
          </span> 
      </h1>

      <motion.div
      initial={{
        scale: 0.75
      }} whileInView={{
        scale: 1
      }} 
  
      transition={{
        duration: 1
      }}
      className="image-gradient relative z-10">
        <Image src='/images/coding.jpg' className="w-[250px]
        lg:w-[350px] lg:h-[350px] glow
         h-[250px] object-cover rounded-[50%] z-10 sticky" height={340} width={340} alt='Nikodimos Jemaneh' />
    </motion.div>
    
    </motion.section>
  )
}

export default Hero