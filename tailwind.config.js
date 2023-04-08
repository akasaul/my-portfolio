/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkContent: '#666666', 
        solidHeading: '#42446E',
        lightContext: '#A7A7A7', 
        headerDark: '#D9D9D9', 
        solidHeadingDarkMode: '#CCCCCC',
        cardDark: '#363636'
      },
      fontSize: {
        fs1: '14px', 
        fs2: '16px', 
        fs3: '18px',
        fs4: '20px',
        fs5: '28px',
        fs6: '32px',
        fs7: '48px',
        fs8: '58px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', fontFamily.poppins],
        dmSans: ['var(--font-dm-sans)', fontFamily.sans],
      },
      fontWeight: {
        medium: 500
      },
      screens: {
        xs: '410px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

