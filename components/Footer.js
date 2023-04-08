import Link from "next/link"
import { sans } from '../fonts/fonts'

const Footer = () => {
  return (
    <footer className={`${sans.className} flex items-center flex-col sm:flex-row py-5 border-t-2 justify-between`}>
        
        <ul className={`${sans.className} flex-1 sm:gap-4 gap-2 sm:ml-auto flex text-darkContent dark:text-lightContext`}>
           
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

        <p className="dark:text-lightContext text-fs1 sm:text-fs2">Built by <span className="nav-logo-gradient">Nikodimos</span> with <span className="nav-text-gradient">Love </span> & <span className="nav-logo-gradient">Music</span> </p>


    </footer>
  )
}

export default Footer