import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import JobForm from '../../components/jobForm'
import { GlobalContext } from '../../context/appContext'
function EditJob() {
  const Router = useRouter()
  const jobId = Router.query.edit

  const { getJob, job, editJob } = GlobalContext()
  useEffect(() => {
    if (jobId) {
      getJob(jobId)
    }
  }, [jobId])
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <JobForm
          buttonType={'edit'}
          initialValues={job}
          clickHandler={editJob}
          jobId={job._id}
        />
      </section>
    </>
  )
}

export default EditJob
