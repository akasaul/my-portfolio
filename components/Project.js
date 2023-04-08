import { poppins } from '../fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

const Project = ({title, description, projectImg, stack, liveViewLink, githubLink}) => {
  return (
    <div className={`${poppins.className} cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col max-w-[450px]
    mx-auto rounded-[1rem] shadow-2xl overflow-hidden dark:bg-cardDark`}>
      <Image src={projectImg} className='w-full h-[200px] object-cover' width={500} height={500}  alt={title}/>

      <div className='p-4 flex flex-col gap-3'>
        <h4 className='text-fs3 dark:text-solidHeadingDarkMode font-semibold'>
        {title}
        </h4>

        <p className='text-fs1 text-start font-light text-darkContent dark:text-solidHeadingDarkMode'>
          {description}
        </p>


        <div>
          <p className='text-fs1 dark:text-solidHeadingDarkMode text-solidHeading font-light'>
            <span className='font-semibold underline'>Tech Stack: </span> 
             {stack}</p>
        </div>


        <div className='flex items-center justify-between
        dark:text-solidHeadingDarkMode'>
        <a className='text-fs1 font-bold flex items-center gap-3 underline' target='_blank' href={liveViewLink}><FaLink /> Live Preview</a>

        <a className='text-fs1 font-bold flex items-center gap-3 underline' target='_blank' href={githubLink}><FaGithub /> View Code</a>


        </div>

      </div>

    </div>
  )
}

export default Project