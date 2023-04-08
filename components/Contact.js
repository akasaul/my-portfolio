import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa"
import { sans } from '../fonts/fonts';

const Contact = () => {
  return (
    <article className={`flex mb-8 flex-col sm:flex-row justify-between ${sans.className}`} id='contact'>

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
        
    </article>
  )
}

export default Contact