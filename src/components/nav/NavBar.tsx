import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router = useRouter()
  const currentRouter = router.pathname

  return (
    <nav className='w-full fixed inset-x-0 bottom-14 z-20'>
      <div
        className='flex justify-center shadow-box
        bg-vingateBlue
          bg-opacity-40
          py-3
          mx-24
          rounded-lg
          backdrop-blur-3xl
          backdrop-brightness-200
          drop-shadow-lg
          '>
        <ul
          className='
          font-thin 
          tracking-widest 
          text-sm
          mx-10
          w-full
          flex flex-row 
          justify-between 
          content-center border-b 
          rounded-sm
        border-white 
        text-white pb-2 
          '>
          <li className=''>
            <Link href={`/`}>
              <span className={currentRouter === '/' ? 'text-red-600 font-semibold hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>HOME</span>
            </Link>
          </li>
          <li>
            <Link href={`/about`}>
              <span className={currentRouter === '/about' ? 'text-red-600 font-semibold hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link href={`/portfolio`}>
              <span className={currentRouter === '/portfolio' ? 'text-red-600 font-semibold hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>
                PORTFOLIO
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/courses`}>
              <span className={currentRouter === '/courses' ? 'text-red-600 font-semibold hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>
                COURSES
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/blog`}>
              <span className={currentRouter === '/blog' ? 'text-red-600 font-semibold hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>BLOG</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
