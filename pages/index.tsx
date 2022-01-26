import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import React from 'react'
import styled from 'styled-components'

import AnimalSelectSection from '~/components/templates/AnimalSelectSection'
import { Container } from '~/libs/baseComponets'

import { prisma } from '../core/infra/prisma'
import AnimalRepository from '../core/infra/prisma/repository/animalRepository'
import AnimalsPresenter from '../core/presenter/animal/animalsPresenter'
import { AnimalsViewModel } from '../core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '../core/usecase/animal/animalsInteractor'

type Props = {
  animals: AnimalsViewModel[]
  providers: any
}

const AuthSection = styled.section`
  background: red;
`

const StepTitle = styled.h2`
  font-size: 2.1rem;
  text-align: left;
`

const Home: NextPage<Props> = ({ animals }) => {
  return (
    <div>
      <Container>
        <StepTitle>Step1</StepTitle>
        <AuthSection>
          <button onClick={() => signIn('auth0')}>ログイン</button>
        </AuthSection>
        <StepTitle>Step2</StepTitle>
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
