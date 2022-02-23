import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/nav'
import { AppProvider } from '../context/appContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const Router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      Router.replace('/dashboard')
    }
  }, [])
  return (
    <>
      <Head>
        <title>Job Trackers</title>
      </Head>
      <AppProvider>
        <Nav />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
