import React from 'react'
import styled from 'styled-components'
type Props = {
  image: string
  alt: string
  id: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  state: React.SetStateAction<number | undefined>
}

import Image from 'next/image'

const Label = styled.label`
  cursor: pointer;
  display: block;
  border-radius: 50%;
  &:hover {
    border: dashed gray;
  }
`

const Radio = styled.input`
  display: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
  &:checked + ${Label} {
    background: gray;
  }
`

const CircleRadio = (props: Props) => {
  const { id, alt, image, state, onChange } = props
  return (
    <>
      <Radio
        type="radio"
        id={String(id)}
        onChange={onChange}
        checked={id === state}
        value={id}
      />
      <Label htmlFor={String(id)}>
        <Image width={200} height={200} src={image} alt={alt} />
      </Label>
    </>
  )
}

export default CircleRadio
