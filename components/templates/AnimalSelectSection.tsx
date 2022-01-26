import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import CircleRadioGroup from '~/components/molecules/CircleRadioGroup'
import { AnimalsViewModel } from '~/core/presenter/animal/animalsViewModel'
import { BaseSection } from '~/libs/baseComponets'

const _AnimalSelectSection = styled(BaseSection)`
  max-width: 600px;
  margin: 0 auto;
`

const AnimalSetButton = styled.button`
  display: block;
  background: gray;
  width: 100%;
  color: white;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
`
type Props = {
  animals: AnimalsViewModel[]
}

const AnimalSelectSection = (props: Props) => {
  const { animals } = props
  const { data: session } = useSession()

  const [state, setState] = useState<number | undefined>(undefined)
  const radioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(Number(e.target.value))
  }

  const setAnimalClick = async () => {
    const animal = animals.find((_, i) => state === i)

    if (!session) {
      return alert('Step1のログインを行ってください。')
    }
    if (state === undefined) {
      return alert('動物を選択してください。')
    }
    if (!animal) {
      return alert('動物が存在しません。')
    }
    await fetch('/api/user/animals', {
      method: 'PUT',
      body: JSON.stringify({ animalId: animal.id }),
    })
  }
  return (
    <_AnimalSelectSection>
      <div>
        <CircleRadioGroup state={state} onChange={radioClick} items={animals} />
      </div>
      <AnimalSetButton onClick={setAnimalClick}>確定</AnimalSetButton>
    </_AnimalSelectSection>
  )
}

export default AnimalSelectSection
