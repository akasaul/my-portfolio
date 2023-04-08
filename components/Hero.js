import Image from "next/image"
import { poppins } from '../fonts/fonts'

const Hero = () => {
  return (
    <section className={`${poppins.className} justify-between flex my-20 flex-col sm:flex-row gap-5 items-center font-bold`}>
     
      <h1 className="text-solidHeading lg:text-fs7 text-fs6 dark:text-headerDark">
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
        lg:max-w-[350px] lg:max-h-[350px]
         max-h-[250px] object-cover rounded-[50%] z-10 sticky" height={340} width={340} alt='Nikodimos Jemaneh' />
    </div>
    
    </section>
  )
}

export default Hero