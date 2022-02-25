import { useContext, useEffect } from 'react'
import JobForm from '../components/jobForm'
import Jobs from '../components/jobs'
import WithAuth from '../components/withAuth'
import { GlobalContext } from '../context/appContext'
function Dashboard() {
  const { allJobs, token } = GlobalContext()
  useEffect(() => {
    if (token) {
      allJobs()
    }
  }, [token])
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <JobForm
          buttonType={'submit'}
          initialValues={{
            company: '',
            position: '',
          }}
        />
        <Jobs />
      </section>
    </>
  )
}

export default WithAuth(Dashboard)
