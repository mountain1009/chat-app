import '../styles/globals.css'
import 'ress'
import styled from 'styled-components'

import { UserProvider } from '@auth0/nextjs-auth0'
import type { AppProps } from 'next/app'

import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
