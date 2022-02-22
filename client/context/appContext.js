import { useContext, createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState({ jobs: [] })
  const [job, setJob] = useState({
    company: '',
    position: '',
  })
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('token'))
    }
  }, [token])
  const Router = useRouter()

  // Setup Base Axios Route
  const Axios = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
  })
  // Manage Request
  Axios.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${token}`
      return config
    },
    (error) => Promise.reject(error)
  )

  //Manage Response
  Axios.interceptors.response.use(
    (res) => {
      return res
    },
    (error) => Promise.reject(error)
  )
  const storeToken = (token, user) => {
    localStorage.setItem('token', token)
    setToken(token)
    setUser(user)
    Router.replace('/dashboard')
  }
  const removeToken = () => {
    localStorage.removeItem('token')
    setToken(null)
    Router.replace('/')
  }

  // Add New Job
  const newJob = async (values) => {
    try {
      await Axios.post('/jobs', values)
      allJobs()
    } catch (error) {
      console.log(error)
    }
  }

  //get All Jobs
  const allJobs = async () => {
    try {
      const { data } = await Axios.get('/jobs')

      setJobs(data)
    } catch (error) {
      console.log(error)
    }
  }
  // Delete Job
  const deleteJob = async (jobId) => {
    try {
      await Axios.delete(`/jobs/${jobId}`)
      allJobs()
    } catch (error) {
      console.log(error)
    }
  }
  // Edit  Job
  const editJob = async (jobId, values) => {
    try {
      await Axios.patch(`/jobs/${jobId}`, values)
      setJob({ company: '', position: '' })
      allJobs()
      Router.back()
    } catch (error) {
      console.log(error)
    }
  }

  // Get  Job
  const getJob = async (jobId) => {
    try {
      const { data } = await Axios.get(`/jobs/${jobId}`)
      setJob({
        company: data.job.company,
        position: data.job.position,
        _id: data.job._id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const newUser = async (userBody) => {
    try {
      const { data } = await Axios.post('/users/new', userBody)
      storeToken(data.token, data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const userLogin = async (userBody) => {
    try {
      const { data } = await Axios.post('/users/login', userBody)
      storeToken(data.token, data.user)
    } catch (error) {
      console.log(error)
    }
  }
  const userLogout = async (userBody) => {
    try {
      await Axios.post('/users/logout')
      removeToken()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider
      value={{
        newJob,
        allJobs,
        jobs,
        deleteJob,
        editJob,
        job,
        getJob,
        newUser,
        userLogin,
        userLogout,
        token,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const GlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, GlobalContext }
