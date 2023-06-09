import { themeContext } from '@/context/themeContext';
import Link from 'next/link'
import { useContext } from 'react';
import { FaCloudMoon, FaEnvelope, FaGithub, FaLinkedin, FaSun, FaTelegram } from 'react-icons/fa'
import { sans } from '../fonts/fonts';

const Nav = () => {

  const {darkMode, setDarkMode} = useContext(themeContext);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <nav className='py-3 align-top px-4' id='home'>

      <section className='w-full flex max-w-[1200px] mx-auto'>
        
        <div className='sm:flex-[0.4] flex-[0.2]'>
          <h1 className='nav-logo-gradient hidden xs:block text-fs1 sm:text-fs2 font-bold'>{'{ 21 }'}</h1>  
            <p className='nav-text-gradient sm:block hidden sm:text-fs3 text-fs1 font-bold'>Nikodimos</p>
        </div>
        
        <div className='flex flex-[0.8] sm:flex-[0.6] gap-4 items-center'>
        
          <ul className={`${sans.className} justify-around gap-4 flex-1 ml-auto font-medium flex text-darkContent sm:text-fs2 text-fs1 dark:text-lightContext`}>
           
            <li className='hover:cursor-pointer links'>
              <Link scroll={false} href='#home'>
                Home
              </Link>
            </li>
            
            <li className='hover:cursor-pointer links'>
              <Link scroll={false} href='#about'>
                About
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link scroll={false} href='#tech-stack'>
                Tech
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link scroll={false} href='#projects'>
                Projects
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link scroll={false} href='#contact'>
                Contact
              </Link>
            </li>

          </ul>

          <div className='sm:flex hidden gap-4 text-darkContent'>
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

          <button className='dark:text-darkContent'>
              {
                darkMode ? 
                <FaSun size={22} onClick={toggleTheme} className='hover:text-yellow-400 hover:scale-110' /> : 
                <FaCloudMoon size={22} className='hover:scale-110 hover:text-white rounded-full hover:p-[2px] hover:bg-black' onClick={toggleTheme} />
              }
            </button>
          
        </div>
     
      </section>

    </nav>
  )
}

export default Nav