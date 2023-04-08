import { createContext, useState } from "react";

export const themeContext = createContext(null);

const ThemeContextProvider = ({children}) => {

  const [darkMode, setDarkMode] = useState(true);

  const theme = {darkMode, setDarkMode};

  return (
    <themeContext.Provider value={theme}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider