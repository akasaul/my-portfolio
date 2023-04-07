import ThemeContextProvider from '@/context/themeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ThemeContextProvider>
    <Component {...pageProps} />
  </ThemeContextProvider>
}
