import { Meta } from '@storybook/react'

import CircleRadioGroup from '~/components/molecules/CircleRadioGroup'

export default {
  title: 'components/molecules/CircleRadioGroup',
  component: CircleRadioGroup,
} as Meta

const items = [
  { id: '1', name: 'kujira', image: '/images/kujira.jpg' },
  { id: '2', name: 'pengin', image: '/images/pengin.jpg' },
  { id: '3', name: 'tori', image: '/images/tori.jpg' },
]

export const Default = () => (
  <CircleRadioGroup
    items={items}
    onChange={(_) => alert('押下されました。')}
    state={undefined}
  />
)
