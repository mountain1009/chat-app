import React from 'react'
import styled from 'styled-components'
import { ACCENT_COLOR } from '~/libs/constant'

export type Props = {
  image: string
  alt: string
  id: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  state: React.SetStateAction<number | undefined>
}

import Image from 'next/image'

const SIZE = 200

const Label = styled.label`
  max-width: ${SIZE}px;
  max-width: ${SIZE}px;
  cursor: pointer;
  display: block;
  border-radius: 50%;
  &:hover {
    border: 4px dashed ${ACCENT_COLOR};
    //TODO:  border分を下げることによってちらつきをなくす
    margin: -4px;
  }
`

const Radio = styled.input`
  display: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
  &:checked + ${Label} {
    background: ${ACCENT_COLOR};
  }
`

const CircleRadio = (props: Props) => {
  const { id, alt, image, state, onChange } = props
  return (
    <>
      <p>{state}</p>
      <Radio
        type="radio"
        id={String(id)}
        onChange={onChange}
        checked={id === state}
        value={id}
      />
      <Label htmlFor={String(id)}>
        <Image width={SIZE} height={SIZE} src={image} alt={alt} />
      </Label>
    </>
  )
}

export default CircleRadio
