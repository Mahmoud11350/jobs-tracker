import UserForm from '../../components/userForm'
// import * as Yup from 'yup'
function Login() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <UserForm
          userForm={['email', 'password']}
          button={'login'}
          title="Login"
          initialValues={{
            email: '',
            password: '',
          }}
        />
      </section>
    </>
  )
}

export default Login
