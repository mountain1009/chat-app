import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()

  const component = session ? (
    <button className="ml-2 text-base font-bold" onClick={() => signOut()}>
      ログアウト
    </button>
  ) : (
    ''
  )

  return (
    <header className="bg-main">
      <div className="flex justify-between items-center py-4 px-5 my-0 mx-auto max-w-7xl sm:px-5 md:px-5 lg:px-5 xl:px-5">
        <Link href="/">
          <a className="font-rounded text-base text-lg font-bold">
            Animal掲示板
          </a>
        </Link>
        <nav>
          <ul className="flex">
            <li>
              <Link href="/about">
                <a className="text-base font-bold">About</a>
              </Link>
            </li>
            <li>{component}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
