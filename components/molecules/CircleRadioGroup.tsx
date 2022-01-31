import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

type ImageProps = {
  id: string
  name: string
  image: string
}

type Props = {
  items: ImageProps[]
  onChange: (e: any) => void
  state: React.SetStateAction<number | undefined>
}

const SIZE = 200

const CircleRadioGroup = (props: Props) => {
  const { items, onChange, state } = props
  return (
    <RadioGroup
      className="mb-5 grid grid-cols-3 gap-2"
      value={state}
      onChange={onChange}
    >
      {items.map((v, i) => {
        return (
          <>
            <RadioGroup.Option className="mx-auto my-0" value={i}>
              {({ checked }) => (
                <Image
                  className={`${
                    checked ? 'bg-accent' : ''
                  } rounded-full hover:cursor-pointer`}
                  width={SIZE}
                  height={SIZE}
                  src={v.image}
                  alt={v.name}
                />
              )}
            </RadioGroup.Option>
          </>
        )
      })}
    </RadioGroup>
  )
}

export default CircleRadioGroup
