import * as nextImage from 'next/image'
import * as React from 'react'
import GlobalStyle from '../styles/global'

import { SessionProvider } from 'next-auth/react'

const withNextAuth = (Story) => {
  return (
    <SessionProvider>
      <Story />
    </SessionProvider>
  )
}

const withGlobalStyle = (Story) => {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
}

export const decorators = [withNextAuth, withGlobalStyle]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
