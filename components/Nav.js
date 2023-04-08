import { themeContext } from '@/context/themeContext';
import Link from 'next/link'
import { useContext } from 'react';
import { FaBars, FaCloudMoon, FaGit, FaGithub, FaLightbulb, FaLinkedin, FaMoon, FaSun, FaTelegram } from 'react-icons/fa'
import { sans, poppins } from '../fonts/fonts';

const Nav = () => {

  const {darkMode, setDarkMode} = useContext(themeContext);

  console.log(darkMode);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <nav className='py-3 align-top px-4'>

      <section className='w-full flex max-w-[1200px] mx-auto'>
        
        <div className='sm:flex-[0.4] flex-[0.2]'>
          <h1 className='nav-logo-gradient text-fs1 sm:text-fs2 font-bold'>{'{ 21 }'}</h1>  
            <p className='nav-text-gradient sm:block hidden sm:text-fs3 text-fs1 font-bold'>Nikodimos</p>
        </div>
        
        <div className='flex flex-[0.8] sm:flex-[0.6] gap-4 items-center'>
        
          <ul className={`${sans.className} justify-around sm:gap-4 gap-2 flex-1 ml-auto font-medium flex text-darkContent sm:text-fs2 text-fs1 dark:text-lightContext`}>
           
            <li className='hover:cursor-pointer links'>
              <Link href='#home'>
                Home
              </Link>
            </li>
            
            <li className='hover:cursor-pointer links'>
              <Link href='#about'>
                About
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link href='#tech-stack'>
                Tech
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link href='#projects'>
                Projects
              </Link>
            </li>

            <li className='hover:cursor-pointer links'>
              <Link href='#contact'>
                Contact
              </Link>
            </li>

          </ul>

          <div className='sm:flex hidden gap-4 text-darkContent'>
            <FaGithub size={22} className='cursor-pointer' />
            <FaTelegram size={22} className='cursor-pointer' />
            <FaLinkedin size={22} className='cursor-pointer' />
          </div>


          <button className='dark:text-darkContent'>
              {
                darkMode ? 
                <FaSun size={22} onClick={toggleTheme} /> : 
                <FaCloudMoon size={22} onClick={toggleTheme} />
              }
            </button>

          {/* <button className='sm:hidden dark:text-darkContent'>
            <FaBars />
          </button> */}
          
        </div>
     
      </section>

    </nav>
  )
}

export default Nav