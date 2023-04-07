import Image from "next/image"
import { poppins } from '../fonts/fonts'

const Hero = () => {
  return (
    <section className={`${poppins.className} px-4 justify-between flex mt-20 max-w-[1200px] flex-col sm:flex-row mx-auto text-fs6 gap-5 items-center font-bold`}>
     
      <h1 className="text-solidHeading dark:text-white">
        <span className="block">
          Hi  👋, 
        </span>
        <span className="block">
          My name is 
        </span>
        <span className="block hero-gradient">
          Nikodimos Jemaneh
        </span>
        I build things for web
      </h1>

      <div className="image-gradient relative z-10">
        <Image src='/images/proxy1.jpeg' className="max-w-[250px] 
         max-h-[250px] object-cover rounded-[50%] sticky" height={340} width={340} alt='Nikodimos Jemaneh' />
    </div>
    
    </section>
  )
}

export default Hero