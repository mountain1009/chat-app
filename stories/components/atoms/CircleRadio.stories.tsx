import { Meta } from '@storybook/react'

import CircleRadio from '~/components/atoms/CircleRadio'

export default {
  title: 'components/atoms/CircleRadio',
  component: CircleRadio,
} as Meta

export const Default = () => (
  <CircleRadio
    image="/images/kujira.jpg"
    alt="hogehoge"
    id={1}
    onChange={(_) => alert('押下されました。')}
    state={undefined}
  />
)
