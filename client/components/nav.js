import Image from 'next/image'
import { GlobalContext } from '../context/appContext'

function Nav() {
  const { userLogout, token, user } = GlobalContext()
  const parsedUser = JSON.parse(user)
  return (
    <nav className="container absolute left-1/2 -translate-x-1/2 pt-6">
      <div className="flex items-center justify-between">
        <Image src={'/logo.svg'} width={159} height={50} />

        {token && user && (
          <>
            <div className="flex items-center space-x-1 md:space-x-4">
              <h1 className="text-center font-bold capitalize text-main md:text-lg lg:text-xl">
                {parsedUser.name}
              </h1>
              <button
                onClick={userLogout}
                className="rounded border border-red-500 py-2 px-4 text-xl text-red-500 transition-colors duration-300 hover:bg-red-700 hover:text-white"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
