import { GlobalContext } from '../context/appContext'
import Spiner from './spinner'
import Link from 'next/link'
import moment from 'moment'
function Jobs() {
  const { jobs, deleteJob, loading } = GlobalContext()

  const jobHtml = jobs.jobs.map((job) => {
    return (
      <div
        key={job._id}
        className="relative cursor-pointer rounded bg-white py-4 px-4 capitalize transition-all duration-700 hover:-translate-y-3 hover:shadow-lg"
      >
        <h4 className=" absolute right-0 top-0 w-fit rounded bg-main/30  px-3  py-2 text-right text-main">
          {moment(job.createdAt).format('MMM Do, YYYY')}
        </h4>
        <h2 className="mt-5 text-xl font-bold ">{job.position}</h2>
        <h3 className="text-zinc w-fit rounded bg-main/20 py-3 px-3">
          {job.company}
        </h3>
        <div className="flex items-center justify-between">
          <div className="space-x-4">
            <button className="font-bold capitalize text-green-500">
              <Link href={`job/${job._id}`}>
                <a className="text-">edit</a>
              </Link>
            </button>
            <button
              className="font-bold capitalize text-red-500 "
              onClick={() => deleteJob(job._id)}
            >
              delete
            </button>
          </div>
          <div className=" text-lg text-main"> {job.status}</div>
        </div>
      </div>
    )
  })
  return (
    <>
      <div className="mt-8">{loading && <Spiner />}</div>
      {jobs && (
        <>
          <section className="container mt-8 mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {jobHtml}
          </section>
        </>
      )}
    </>
  )
}

export default Jobs

export async function getStaticProps() {}
