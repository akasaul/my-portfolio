import Image from 'next/image';

const skills = ['React.js', 'Express.js', 'Mongo DB', 'Docker', 'Git'];

const Experience = () => {
  return (
    <>
      <h2 className='my-4 font-bold text-center b-2 text-fs5 dark:text-headerDark text-solidHeading'>
        Experience
      </h2>

      <ul
        aria-label='User feed'
        role='feed'
        className='relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 '
      >
        <li role='article' className='relative pl-6 '>
          <div className='flex flex-col flex-1 gap-2'>
            <a
              href='#'
              className='absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white'
            >
              <Image
                src='/images/addissoftwarelogo.jpeg'
                alt='user name'
                title='user name'
                width='48'
                height='48'
                className='max-w-full rounded-full'
              />
            </a>
            <h4 className='flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center'>
              <span className='flex-1 nav-text-gradient'>
                Full Stack Developer Intern
                <span className='text-sm font-normal text-slate-500'>
                  {' at Addis Software'}
                </span>
              </span>
              <span className='text-xs font-normal text-slate-400'>
                Aug 3 - Oct 3
              </span>
            </h4>
            <p className='text-sm text-slate-500'>
              I had a very exciting opportunity to learn and explore software development while
              building real world projects.
            </p>
            <div className='flex gap-2'>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className='inline-flex items-center justify-center gap-1 rounded-full bg-emerald-500 px-2.5 text-sm text-white'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Experience;
