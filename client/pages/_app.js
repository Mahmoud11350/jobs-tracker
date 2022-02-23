import '../styles/globals.css'
import Nav from '../components/nav'
import { AppProvider } from '../context/appContext'

function MyApp({ Component, pageProps }) {
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
