import { FaGithub, FaTelegram, FaLinkedin, FaMailchimp, FaEnvelope } from "react-icons/fa"
import { sans } from '../fonts/fonts';

const Contact = () => {
  return (
    <article className={`${sans.className} mb-8`} id='contact'>

      <section className="flex flex-col mb-4 sm:flex-row justify-between">

          <p className='nav-logo-gradient text-center text-fs3 font-bold'>Contact Me</p>

          <div className="dark:text-lightContext text-solidHeading flex items-center flex-col sm:flex-row justify-around gap-3 text-fs2">

            <a href="tel: 0968600496">+251968600496</a>
            <a href="mailto: nikodimosjemaneh40@gmail.com">nikodimosjemaneh40@gmail.com</a>


            <div className='flex gap-4 dark:text-darkContent text-solidHeading'>
                <FaGithub size={22} className='cursor-pointer' />
                <FaTelegram size={22} className='cursor-pointer' />
                <FaLinkedin size={22} className='cursor-pointer' />
              </div>

            </div>

      </section>
      
      {/* <form className="max-w-[700px] mx-auto flex flex-col gap-5">
        <label className="flex flex-row items-center gap-3 justify-center text-darkContent dark:lightContext"><FaEnvelope /> Email Me</label>
        <textarea rows={4}  className='p-2 border-2 rounded-[0.2rem] border-[#E70FAA] focus:outline-none dark:text-lightContext dark:border-lightContext bg-transparent'></textarea>

      <a href={`mailto: nikodio`} type="button" className="outline outline-1 self-center p-2 px-5 rounded-lg outline-[#13B0F5] hover:bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] hover:outline-none hover:text-white text-[#E70FAA]">Send</a>

      </form> */}

        
    </article>
  )
}

export default Contact