import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Trackers</title>
      </Head>
      <section className="container grid h-screen grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        <div className="mx-auto  text-center md:w-3/4 md:text-left">
          <h1 className="text-3xl font-bold md:text-5xl">Job Tracking App</h1>
          <p className="py-3">
            I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk
            photo booth plaid jianbing actually squid 3 wolf moon lumbersexual.
            Hell of humblebrag gluten-free lo-fi man braid leggings.
          </p>
          <Link href={'/user/login'}>
            <button className="mr-7 rounded bg-main py-2 px-4 text-lg text-white hover:bg-main/90 ">
              Login
            </button>
          </Link>
          <Link href={'/user/register'}>
            <button className="rounded bg-main py-2 px-4 text-lg text-white hover:bg-main/90 ">
              Register
            </button>
          </Link>
        </div>
        <div className="hidden md:block">
          <Image src={'/main.svg'} width={852} height={617} alt="header" />
        </div>
      </section>
    </>
  )
}
