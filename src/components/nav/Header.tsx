import Image from 'next/image'
import Link from 'next/link'
import MenuComponent from '../menu/MenuComponent'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

interface IHeaderProps {
  isLogin?: boolean
}
const Header = ({ isLogin = false }: IHeaderProps) => {
  return (
    <header className='grid grid-rows-1 pt-10 w-full absolute top-0'>
      <div className='flex flex-row justify-between'>
        <Link href='/'>
          <Image
            src='/Logo.png'
            alt='iYairDev'
            width={120}
            height={120}
            className='flex z-10 pl-10'
          />
        </Link>
        <div className='flex gap-10 pr-10'>
          {isLogin ? (
            <>
              <div className='relative flex hover:drop-shadow-neon cursor-pointer'>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-white'></span>
              </span>
                <Link href='/cart'>
                  <ShoppingBagIcon className='h-10 w-10 text-white' />
                </Link>
              </div>
              <MenuComponent isLogin={isLogin} />
            </>
          ) : (
            <MenuComponent isLogin={isLogin} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
