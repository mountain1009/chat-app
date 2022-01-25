import type { NextPage } from 'next'
import React from 'react'

import { Container } from '~/libs/baseComponets'

import { prisma } from '../core/infra/prisma'
import AnimalRepository from '../core/infra/prisma/repository/animalRepository'
import AnimalsPresenter from '../core/presenter/animal/animalsPresenter'
import { AnimalsViewModel } from '../core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '../core/usecase/animal/animalsInteractor'
import AnimalSelectSection from '~/components/templates/AnimalSelectSection'

type Props = {
  animals: AnimalsViewModel[]
}

const Home: NextPage<Props> = ({ animals }) => {
  return (
    <div>
      <Container>
        <AnimalSelectSection animals={animals} />
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
