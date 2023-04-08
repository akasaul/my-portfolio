import { useState } from "react";
import { FaGithub, FaTelegram, FaLinkedin, FaMailchimp, FaEnvelope } from "react-icons/fa"
import { sans } from '../fonts/fonts';

const Contact = () => {

  const [message, setMessage] = useState('');

  return (
    <article className={`${sans.className} mb-8`} id='contact'>

      <section className="flex flex-col mb-4 sm:flex-row justify-between">

          <p className='nav-logo-gradient text-center text-fs3 font-bold'>Contact Me</p>

          <div className="dark:text-lightContext text-solidHeading flex items-center flex-col sm:flex-row justify-around gap-3 text-fs2">

            <a href="tel: 0968600496">+251968600496</a>
            <a href="mailto: nikodimosjemaneh40@gmail.com">nikodimosjemaneh40@gmail.com</a>


            <div className='flex gap-4 dark:text-darkContent text-solidHeading'>
                <a href='https://github.com/akasaul' target='_blank'>
                  <FaGithub size={22} className='cursor-pointer hover:text-lightContext' />
                </a>

                <a href='https://t.me/NJK47' target='_blank'>
                <FaTelegram size={22} className='cursor-pointer hover:text-lightContext' />
                </a>
        
                <a href={`mailto: nikodimosjemaneh40@gmail.com?subject=Hello Nikodimos`} type="button">
                  <FaEnvelope size={22} className='cursor-pointer hover:text-lightContext' />
                </a>
    
              </div>

            </div>

      </section>
      
      <form className="max-w-[700px] mx-auto flex flex-col gap-5">
        <label className="flex flex-row items-center gap-3 justify-center text-darkContent dark:lightContext"><FaEnvelope /> Email Me</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className='p-2 border-2 rounded-[0.2rem] border-[#E70FAA] focus:outline-none dark:text-lightContext dark:border-lightContext bg-transparent'></textarea>

        <a href={`mailto: nikodimosjemaneh40@gmail.com?subject=Hello Nikodimos&body=${message}`} type="button" className="btn">Send</a>

      </form>

        
    </article>
  )
}

export default Contact