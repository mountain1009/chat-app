import type { NextPage } from 'next'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Container } from '~/libs/baseComponets'

import CircleRadioGroup from '../components/molecules/CircleRadioGroup'
import { prisma } from '../core/infra/prisma'
import AnimalRepository from '../core/infra/prisma/repository/animalRepository'
import AnimalsPresenter from '../core/presenter/animal/animalsPresenter'
import { AnimalsViewModel } from '../core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '../core/usecase/animal/animalsInteractor'

type Props = {
  animals: AnimalsViewModel[]
}

const AnimalSelectSection = styled.section`
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

const Home: NextPage<Props> = ({ animals }) => {
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
    <div>
      <Container>
        <AnimalSelectSection>
          <div>
            <CircleRadioGroup
              state={state}
              onChange={radioClick}
              items={animals}
            />
          </div>
          <AnimalSetButton onClick={setAnimalClick}>確定</AnimalSetButton>
        </AnimalSelectSection>
      </Container>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const presenter = new AnimalsPresenter(
    new AnimalsInteractor(new AnimalRepository(prisma)),
  )

  const animals: AnimalsViewModel[] = await presenter.execute()

  return { props: { animals } }
}
