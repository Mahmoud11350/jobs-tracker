import { Formik, Form, Field } from 'formik'
import Spiner from './spinner'
import * as Yup from 'yup'
import { GlobalContext } from '../context/appContext'
import Link from 'next/link'
function UserForm({ userForm, button, title, initialValues }) {
  const { userLogin, newUser, loading, error, errorMsg } = GlobalContext()
  let userSchema = {
    email: Yup.string().required(),
    password: Yup.string().required(),
  }
  if (button !== 'login') {
    userSchema = {
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    }
  }
  const handleSubmit = (values, { resetForm }) => {
    if (button === 'login') {
      userLogin(values)
    } else {
      try {
        newUser(values)
      } catch (e) {
        console.log(e)
      }
    }

    resetForm({})
  }

  return (
    <div className="mt-[80px] rounded-lg bg-white py-5 px-5">
      <h3 className="text-center text-4xl font-bold text-main">{title}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({ ...userSchema })}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, isValid }) => (
          <Form className=" min-w-[300px] md:min-w-[600px]" key={'job form'}>
            {' '}
            {userForm.map((field) => (
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
            <button
              disabled={!isValid}
              type="submit"
              className={`w-full rounded bg-main py-1 text-xl  capitalize text-white transition-transform duration-300 active:-translate-y-2 ${
                !isValid ? 'cursor-not-allowed' : ''
              } `}
            >
              {button}
            </button>
            {button === 'login' ? (
              <p className="mt-3 text-center capitalize ">
                Don't have account !{' '}
                <Link href="/user/register">
                  <a className="cursor-pointer font-bold text-green-600">
                    Register
                  </a>
                </Link>
              </p>
            ) : (
              <p className="mt-3 text-center capitalize ">
                {' '}
                Already have account{' '}
                <Link href="/user/login">
                  <a className="cursor-pointer font-bold text-green-600">
                    login
                  </a>
                </Link>
              </p>
            )}
            {loading && <Spiner />}
            {error && (
              <p className="mt-3 text-center text-lg font-bold text-red-400">
                {errorMsg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm
