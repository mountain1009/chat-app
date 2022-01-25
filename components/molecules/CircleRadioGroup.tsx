import React from 'react'
import styled from 'styled-components'

import CircleRadio from '../atoms/CircleRadio'

type ImageProps = {
  id: string
  name: string
  image: string
}

type Props = {
  items: ImageProps[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  state: React.SetStateAction<number | undefined>
}

const RadioGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const CircleRadioGroup = (props: Props) => {
  const { items, onChange, state } = props
  return (
    <RadioGroup>
      {items.map((v, i) => {
        return (
          <li key={i}>
            <CircleRadio
              state={state}
              onChange={onChange}
              id={i}
              image={v.image}
              alt={v.name}
            />
          </li>
        )
      })}
    </RadioGroup>
  )
}

export default CircleRadioGroup
