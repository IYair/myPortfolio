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
      <main>
        <div>
          <Image
            src='/me.png'
            height={1050}
            width={850}
            alt='Yair'
            priority
            className='absolute right-[8rem] -bottom-2 -z-20 pl-40'
          />
        </div>
        <div
          className='absolute left-[12.5%] top-1/2 text-[64px] text-white font-extralight -z-10 tracking-[.3em]	whitespace-pre-line
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
              cursorClassName: 'text-red-600 Typewriter__cursor drop-shadow-neon -z-20'
            }}
          />
        </div>
      </main>
    </LayoutAccess>
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
