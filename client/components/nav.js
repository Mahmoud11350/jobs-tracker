import Image from 'next/image'
function Nav() {
  return (
    <nav className="container absolute left-1/2 -translate-x-1/2 pt-6">
      <Image src={'/logo.svg'} width={159} height={50} />
    </nav>
  )
}

export default Nav
