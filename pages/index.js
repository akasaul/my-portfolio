import { Inter } from 'next/font/google'
import { themeContext } from '@/context/themeContext';
import { useContext } from 'react'

export default function Home() {
  const {darkMode, setDarkMode} = useContext(themeContext);

  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <section className={darkMode ? 'dark' : ''}>
      <div className='bg-green-200 dark:bg-black dark:text-white'>
        <h1>Hi</h1>
        <button onClick={handleDarkMode} className='border p-2 bg-black text-white rounded-xl'>toggle</button>
      </div>
    </section>
  )
}
