import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'

import { MEDIA } from '~/libs/constant'

export const sp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: ${MEDIA.spMax}px) {
    ${css(first, ...interpolations)}
  }
`

export const tab = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${MEDIA.spMax + 1}px) and (max-width: ${MEDIA.tabMax}px) {
    ${css(first, ...interpolations)}
  }
`
export const pc = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: ${MEDIA.tabMax + 1}px) {
    ${css(first, ...interpolations)}
  }
`
