import { useContext, createContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState({ jobs: [] })
  const [job, setJob] = useState({
    company: '',
    position: '',
  })
  const Router = useRouter()

  // Setup Base Axios Route
  const Axios = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
  })

  // Add New Job
  const newJob = (values) => Axios.post('/jobs', values)

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
    } catch (error) {
      console.log(error)
    }
  }
  // Edit  Job
  const editJob = async (jobId, values) => {
    try {
      await Axios.patch(`/jobs/${jobId}`, values)
      setJob({ company: '', position: '' })
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
    } catch (error) {
      console.log(error)
    }
  }

  const userLogin = async (userBody) => {
    try {
      const { data } = await Axios.post('/users/login', userBody)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const GlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, GlobalContext }
