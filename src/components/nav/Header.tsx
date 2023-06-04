import Image from 'next/image'
import burgger from '../../styles/burgger.module.css'
import Link from 'next/link'

interface IHeaderProps {
  isLogin?: boolean
}
const Header = ({ isLogin = false }: IHeaderProps) => {
  return (
    <header className='grid grid-rows-1 pt-10 w-full absolute top-0'>
      <div className='flex flex-row justify-between'>
        <Link
          href='/'
          className='flex z-10 pl-10'>
          <Image
            src='/Logo.png'
            alt=''
            width={80}
            height={100}
          />
        </Link>
        <div className='flex gap-10 pr-10'>
          {isLogin ? (
            <>
              <div className='hover:drop-shadow-neon cursor-pointer'>
                <Image
                  src='/CartMenu.png'
                  alt=''
                  width={42}
                  height={36}
                />
              </div>
              <div className='hover:drop-shadow-neon'>
                <input
                  type='checkbox'
                  id={burgger.checkbox}
                />
                <label
                  htmlFor={burgger.checkbox}
                  className={burgger.toggle}>
                  <div
                    className={burgger.bars}
                    id={burgger.bar1}></div>
                  <div
                    className={burgger.bars}
                    id={burgger.bar2}></div>
                  <div
                    className={burgger.bars}
                    id={burgger.bar3}></div>
                </label>
              </div>
            </>
          ) : (
            <a className='z-10 hover:drop-shadow-neon'>
              <input
                type='checkbox'
                id={burgger.checkbox}
              />
              <label
                htmlFor={burgger.checkbox}
                className={burgger.toggle}>
                <div
                  className={burgger.bars}
                  id={burgger.bar1}></div>
                <div
                  className={burgger.bars}
                  id={burgger.bar2}></div>
                <div
                  className={burgger.bars}
                  id={burgger.bar3}></div>
              </label>
            </a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
