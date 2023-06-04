import { ReactNode, useEffect, useState } from 'react'
import { subscribe } from '@/Events'
import Provider from './Provider'
import useModalDialogs from '@/hooks/useModalDialogs'
import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import { NavBar } from '@/components/nav/NavBar'
import Header from '@/components/nav/Header'
import { set } from 'lodash'

export interface ILayoutAccessChildrenProps {}

interface ILayoutAccessProps {
  children: JSX.Element | JSX.Element[] | ReactNode[] | ReactNode | ((props: ILayoutAccessChildrenProps) => ReactNode) | null
  card?: boolean
}
export const LayoutAccess = ({ children, card = false }: ILayoutAccessProps) => {
  const { ErrorDialogComponent, setShowErrorDialog, setShowSuccessDialog, SuccessDialogComponent } = useModalDialogs()
  const { data: session, status } = useSession()
  const [isLogin, setIsLogin] = useState(false)

  const [error, setError] = useState({
    title: '',
    message: ''
  })
  const [success, setSuccess] = useState({
    title: '',
    message: ''
  })

  const checkSession = async (): Promise<void> => {
    if (session) {
      setIsLogin(true)
    }
  }
  useEffect(() => {
    checkSession()
  }, [session])

  useEffect(() => {
    /**
     * Subscribe the event in order to show the error dialog.
     */
    subscribe('base:error:dialog:set', ({ detail }: { detail: { show: boolean; title: string; message: string } }) => {
      setShowErrorDialog(detail.show)
      setError({ title: detail.title || 'Error', message: detail.message })
    })

    subscribe('base:success:dialog:set', ({ detail }: { detail: { show: boolean; title: string; message: string } }) => {
      setShowSuccessDialog(detail.show)
      setSuccess({ title: detail.title || '', message: detail.message })
    })

    return () => {
      subscribe('base:error:dialog:set', null)
      subscribe('base:success:dialog:set', null)
    }
  }, [setShowErrorDialog, setShowSuccessDialog])

  return (
    <Provider>
      <div
        className='
              min-h-screen
              flex
              justify-center
              items-center
              relative
      '>
        {/* Background */}
        <Image
          fill
          src='/NoiseTexturenoiseBackgound.png'
          alt='noise'
          className='-z-10'
        />
        <div
          className='
                absolute
                left-0
                right-0
                top-0
                bottom-0
                w-full
                h-full
                bg-no-repeat
                bg-cover
                blur-[4px]
                brightness-[0.95]
                -z-10
                '></div>
        {/* Card container */}

        {card ? (
          <>
            <div
              className='
              rounded-lg
              shadow-box
              bg-white
              dark:bg-gray-800
              bg-opacity-30
              backdrop-blur-3xl
              flex
              justify-between
              '>
              {/* Main content */}
              <>{children}</>

              <ErrorDialogComponent
                title={error.title}
                message={error.message}
              />

              <SuccessDialogComponent
                title={success.title}
                message={success.message}
              />
            </div>
          </>
        ) : (
          <>
            <Header isLogin={isLogin} />
            <NavBar />
            <div>
              <>{children}</>

              <ErrorDialogComponent
                title={error.title}
                message={error.message}
              />

              <SuccessDialogComponent
                title={success.title}
                message={success.message}
              />
            </div>
          </>
        )}
      </div>
    </Provider>
  )
}
