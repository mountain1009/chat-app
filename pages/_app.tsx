import 'ress'
import GlobalStyle from '../styles/global'

import { UserProvider } from '@auth0/nextjs-auth0'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps }: AppProps) {
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
      <UserProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
