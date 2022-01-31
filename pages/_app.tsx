import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <div className="my-0 mx-auto max-w-7xl">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  )
}

export default MyApp
