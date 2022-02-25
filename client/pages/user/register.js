import UserForm from '../../components/userForm'
function Register() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <UserForm
          userForm={['name', 'email', 'password']}
          button={'Register'}
          title="Register"
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
        />
      </section>
    </>
  )
}

export default Register
