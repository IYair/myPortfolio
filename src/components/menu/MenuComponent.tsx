import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ClipboardDocumentCheckIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const solutions = [
  { name: 'Perfil', description: 'Get a better understanding of your traffic', href: '#', icon: UserIcon },
  { name: 'Ajustes', description: 'Build strategic funnels that will convert', href: '#', icon: Cog6ToothIcon }
]
const callsToAction = [
  { name: 'Sing In', href: '/auth/signin', icon: UserCircleIcon },
  { name: 'Register', href: '/auth/register', icon: ClipboardDocumentCheckIcon }
]

interface Props {
  isLogin: boolean
}

export default function MenuComponent({ isLogin = false }: Props) {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    console.log('handleToggle')
    setIsChecked(prevChecked => !prevChecked)
  }

  const handleBlur = () => {
    setIsChecked(false)
  }

  return (
    <Popover className='relative'>
      {({ open, close }) => (
        <>
          <Popover.Button
            as='div'
            className='flex'
            onClick={handleToggle}>
            <div className='hover:drop-shadow-neon'>
              <Bars3Icon className='h-12 w-12 text-white' />
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            show={open}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'>
            <Popover.Panel
              className='absolute -left-48 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'
              static>
              <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-vingateBlue bg-opacity-20 backdrop-blur-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 hover:shadow-[0_0_15px_0_rgba(255,255,255,0.5)]'>
                <div className='p-4'>
                  {solutions.map(item => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-950 bg-opacity-30'>
                      <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-red-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div>
                        <Link
                          href={item.href}
                          className='font-semibold text-gray-400'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {isLogin ? (
                  <>
                    <div className='grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50 bg-opacity-40'>
                      <Link
                        key='logout'
                        href='/'
                        onClick={() => {
                          signOut()
                          close()
                        }}
                        className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'>
                        <ArrowRightOnRectangleIcon
                          className='h-5 w-5 flex-none text-gray-400'
                          aria-hidden='true'
                        />
                        Logout
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-ligth bg-opacity-40'>
                      {callsToAction.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={close}
                          className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'>
                          <item.icon
                            className='h-5 w-5 flex-none text-gray-400'
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
