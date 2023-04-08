import { poppins } from '../fonts/fonts'
import Project from './Project'
import { motion } from 'framer-motion'
import { projects } from '@/utils/projects'

const Projects = () => {
  return (
    <motion.div className={`${poppins.className} pt-4 my-20`} id='projects'>
      <h2 className='text-fs5 dark:text-headerDark font-bold text-solidHeading text-center mb-2'>Projects</h2>
      <p className='text-fs2 text-darkContent dark:text-lightContext text-center mb-10'>Things I&apos;ve Built so far (all from scratch no tutorials  )</p>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
        {
          projects.map(({title, description, stack, projectImg, githubLink, liveViewLink}) => (
            <Project key={title} title={title} description={description} stack={stack} projectImg={projectImg} githubLink={githubLink} liveViewLink={liveViewLink} />
          ))
        }
      </div>


    </motion.div>
  )
}

export default Projects