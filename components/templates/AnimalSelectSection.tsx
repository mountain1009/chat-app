import CircleRadioGroup from '~/components/molecules/CircleRadioGroup'
import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimalsViewModel } from '~/core/presenter/animal/animalsViewModel'

const _AnimalSelectSection = styled.section`
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
  const [state, setState] = useState<number | undefined>(undefined)
  const radioClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(Number(e.target.value))
  }

  const setAnimalClick = () => {
    if (state === undefined) {
      return alert('動物を選択してください。')
    }
    console.log(animals.find((_, i) => state === i))
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

// export const getServerSideProps = async () => {
//   const presenter = new AnimalsPresenter(
//     new AnimalsInteractor(new AnimalRepository(prisma)),
//   )
//
//   const animals: AnimalsViewModel[] = await presenter.execute()
//
//   console.log(animals)
//
//   return { props: { animals } }
// }
