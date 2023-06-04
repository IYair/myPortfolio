import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router = useRouter()
  const currentRouter = router.pathname

  return (
    <nav className='w-full fixed inset-x-0 bottom-14 z-20'>
      <div className=''>
        <ul className='font-thin tracking-widest text-sm mx-52 flex flex-row justify-between content-center border-b border-white text-white pb-2'>
          <li className=''>
            <Link href={`/`}>
              <span className={currentRouter === '/' ? 'text-red-600 hover:drop-shadow-neon' : 'hover:drop-shadow-neon'}>HOME</span>
            </Link>
          </li>
          <li>
            <Link href={`/About`}>
              <span className={currentRouter === '/About' ? 'text-red-600 ' : 'hover:drop-shadow-neon'}>ABOUT</span>
            </Link>
          </li>
          <li>
            <Link href={`/Portfolio`}>
              <span className={currentRouter === '/Portfolio' ? 'text-red-600' : 'hover:drop-shadow-neon'}>PORTFOLIO</span>
            </Link>
          </li>
          <li>
            <Link href={`/Courses`}>
              <span className={currentRouter === '/Courses' ? 'text-red-600 ' : 'hover:drop-shadow-neon'}>COURSES</span>
            </Link>
          </li>
          <li>
            <Link href={`/Blog`}>
              <span className={currentRouter === '/Blog' ? 'text-red-600' : 'hover:drop-shadow-neon'}>BLOG</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
