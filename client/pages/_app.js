import '../styles/globals.css'
import Nav from '../components/nav'
import { AppProvider } from '../context/appContext'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('WTH')
  }, [])
  return (
    <>
      <AppProvider>
        <Nav />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
