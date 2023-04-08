import { poppins } from '../fonts/fonts'
import Project from './Project'

const Projects = () => {
  return (
    <div className={`${poppins.className} my-20`} id='projects'>
      <h2 className='text-fs5 dark:text-headerDark font-bold text-solidHeading text-center mb-2'>Projects</h2>
      <p className='text-fs2 text-darkContent dark:text-lightContext text-center mb-10'>Things I&apos;ve Built so far</p>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
      
      <Project title={'MERN stack Ecommerce site'} description={'An Ecommerce shop with authentication and authorization system both at the frontend and at the backend.Also includes some fancy features like cart and favorites.'}  projectImg={'/images/ecommerce-mern.png'} stack={'React, Tailwind, Express, MongoDB'} 
      githubLink={'https://github.com/akasaul'}
      liveViewLink={'https://ecommerce-mern-1v4w.vercel.app/shop'}/>
      

      <Project title={'Blog App'} description={'A Dev.to looking like website where users can post blogs, comment, give reactions. With Authentication and decent UI.'}  projectImg={'/images/blog-app-2.png'} stack={'React, Tailwind, NestJS, SQL'} 
      githubLink={'https://github.com/akasaul'}
      liveViewLink={'https://nikos-blog.vercel.app'}/>
      
      <Project title={'More to Come..'} description={'As I am fairly new to the whole programming and web development world (around 8 months since i wrote my first html tag) I am constantly working to sharpen my skills day to day through fun projects and soon i will try to populate this section with handful of projects.'}  projectImg={'/images/coming-soon.jpg'} stack={'React, Tailwind, NestJS, SQL'} 
      githubLink={'https://github.com/akasaul'}
      liveViewLink={'https://nikos-blog.vercel.app'}/>

      </div>


    </div>
  )
}

export default Projects