import { useRouter } from 'next/router'
import { GlobalContext } from '../context/appContext'

const WithAuth = (WrappedComponent) => (props) => {
  const Router = useRouter()
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (!token) {
      Router.replace('/user/login')
      return null
    }
    return <WrappedComponent {...props} />
  }
  return null
}

export default WithAuth
