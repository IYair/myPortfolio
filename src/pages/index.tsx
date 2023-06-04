import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession, signOut, getSession } from 'next-auth/react'
import { ButtonComponent } from '@/components/button/ButtonComponent'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'

export default function Home(props: any) {
  const { data: session } = useSession()
  console.log(session)

  function handleSignOut() {
    signOut()
  }

  return (
    <LayoutAccess>
      <div className={styles.container}>
        <Head>
          <title>Home Page</title>
        </Head>
        {session ? User({ session, handleSignOut }) : Guest()}
      </div>
    </LayoutAccess>
  )
}

//Guest
function Guest() {
  return (
    <main>
      <div
      // className={glitch.glitch}
      >
        <Image
          src='/me.png'
          height={1050}
          width={850}
          alt='Yair'
          className='absolute right-[8rem] -bottom-2 -z-20 pl-40'
        />
      </div>
      <div
        className='absolute left-[12.5%] top-1/2 text-[64px] text-white font-extralight z-10 tracking-[.3em]	whitespace-pre-line
      drop-shadow-[0_0_10px_rgba(255,255,255,1)]
      '>
        <TypewriterComponent
          options={{
            strings: ['YAIR CHAN\n SOFTWARE DEVELOPER', 'REACT', 'TAILDWIND CSS', 'NEXT.JS'],
            cursor: '_',
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
            cursorClassName: 'text-red-600 Typewriter__cursor drop-shadow-neon'
          }}
        />
      </div>
    </main>
  )
}

//Authorize User
function User({ session, handleSignOut }: any) {
  const [expires, setExpires] = useState('')
  useEffect(() => {
    if (session) {
      const expires = moment(session.expires).format('DD/MM/YYYY HH:mm:ss')
      setExpires(expires)
    }
  }, [session])
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'> Authorize User HomePage</h3>

      <div className='details'>
        <h5>{expires}</h5>
        <h5>{session.user?.email}</h5>
        <h5 className='uppercase'>{session.user?.name}</h5>
        <p className='max-w-xl break-words m-4'>{session.user?.token}</p>
      </div>

      <div className='flex justify-center'>
        <ButtonComponent
          primary
          type='button'
          onClick={handleSignOut}>
          Sing Out
        </ButtonComponent>
      </div>
      <div className='flex justify-center mt-4'>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </main>
  )
}

export async function getServerSideProps({ req }: { req: any }) {
  const session = await getSession({ req })

  return {
    props: {
      session
    }
  }
}
