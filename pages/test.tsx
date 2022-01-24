import type { NextPage } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import VantaTemplate from '../components/templates/VantaTemplate'
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
          <VantaTemplate />
        </main>
        <footer />
      </div>
    </>
  )
}

export default Home
