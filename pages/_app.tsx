import 'ress'
import GlobalStyle from '../styles/global'

import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
