import { themeContext } from "@/context/themeContext";
import { DM_Sans } from "next/font/google";
import { useContext } from "react";
import Nav from "./Nav"

const Layout = ({children}) => {

  const {darkMode} = useContext(themeContext)

  return (
    <div className={darkMode ? 'dark' : ''} >

      <section className="dark:bg-black">
        <Nav />
        {children}
      </section>
      
    </div>
  )
}

export default Layout