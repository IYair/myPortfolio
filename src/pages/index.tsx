import { useSession, signOut, getSession } from 'next-auth/react'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import { TextComponent } from '../components/general/text/TextComponent'
import { enumTextSizes, enumTextTags } from '../constants/types'

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
            src='/images/me.png'
            height={1050}
            width={850}
            alt='Yair'
            priority
            className='absolute right-[8rem] -bottom-2 h-[98%] w-auto'
          />
        </div>
        <div
          className='absolute left-[12.5%] top-1/2 text-[36px] text-white font-extralight z-10 tracking-[.3em]	whitespace-pre-line
          '>
          <TextComponent
            sizeFont={enumTextSizes.s44}
            tag={enumTextTags.h1}
            className='text-[100px] font-medium bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-800 via-yellow-300 to-white
            animate-text'>
            YAIR CHAN
          </TextComponent>
          <TypewriterComponent
            options={{
              strings: ['SOFTWARE DEVELOPER', 'REACT', 'TAILWIND CSS', 'NEXT.JS'],
              cursor: '_',
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              wrapperClassName: 'text-[36px] text-white font-extralight z-10 tracking-[.3em]	whitespace-pre-line drop-shadow-[0_0_10px_rgba(255,255,255,1)]',
              cursorClassName: 'text-red-600 Typewriter__cursor drop-shadow-neon -z-20 drop-shadow-[0_0_10px_rgba(255,255,255,1)]'
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
