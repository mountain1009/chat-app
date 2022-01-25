import type { NextPage } from 'next'
import Link from 'next/link'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <>
      <Script src="https://www.google-analytics.com/analytics.js" />
      <div>
        <header>
          <ul>
            <li>
              <Link href="/">TOP</Link>
            </li>
          </ul>
        </header>
        <main>
          <p>hoghoge</p>
        </main>
        <footer />
      </div>
    </>
  )
}

export default Home
