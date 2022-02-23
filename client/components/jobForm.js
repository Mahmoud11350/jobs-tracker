import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { GlobalContext } from '../context/appContext'
function JobForm({ buttonType, jobId }) {
  const { newJob, editJob, job } = GlobalContext()
  const jobForm = ['company', 'position']
  const formSchema = {
    company: Yup.string().required(),
    position: Yup.string().required(),
  }
  const handleSubmit = (values, { resetForm }) => {
    if (buttonType === 'edit') {
      editJob(jobId, { company: values.company, position: values.position })
    } else {
      try {
        newJob(values)
      } catch (e) {
        console.log(e)
      }
    }

    resetForm({})
  }

  return (
    <div className="mt-[80px] rounded-lg bg-white py-5 px-5">
      <h3 className="text-center text-4xl font-bold text-main">
        {buttonType === 'edit' ? 'Edit Job' : 'New Job'}
      </h3>
      <Formik
        initialValues={job}
        validationSchema={Yup.object({ ...formSchema })}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, isValid }) => (
          <Form className=" min-w-[300px] md:min-w-[600px]" key={'job form'}>
            {' '}
            {jobForm.map((field) => (
              <div key={field}>
                <label className="text-lg capitalize" htmlFor={field}>
                  {field}
                </label>
                <Field
                  type="text"
                  id={field}
                  name={field}
                  className="mb-4 block w-full bg-sec py-2 px-4 text-lg outline-none"
                />
              </div>
            ))}
            <Field
              as="select"
              name="status"
              className="mb-4 block w-full bg-sec py-2 px-4 text-lg capitalize outline-none"
            >
              <option value="pending">Pending</option>
              <option value="declined">declined</option>
              <option value="interview">interview</option>
            </Field>
            <button
              disabled={!isValid}
              type="submit"
              className={`w-full rounded bg-main py-1 text-xl  capitalize text-white transition-transform duration-300 active:-translate-y-2 ${
                !isValid ? 'cursor-not-allowed' : ''
              } `}
            >
              {buttonType}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default JobForm
