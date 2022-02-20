import JobForm from '../components/jobForm'
import Jobs from '../components/jobs'
function Dashboard() {
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

export default Dashboard
