import { createGlobalStyle } from 'styled-components'

import { MAIN_COLOR } from '~/libs/constant'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${MAIN_COLOR};
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
`

export default GlobalStyle
