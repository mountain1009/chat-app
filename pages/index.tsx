import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import React from 'react'
import styled from 'styled-components'

import AnimalSelectSection from '~/components/templates/AnimalSelectSection'
import UserRepository from '~/core/infra/prisma/repository/userRepository'
import UserPresenter from '~/core/presenter/user/userPresenter'
import { UserViewModel } from '~/core/presenter/user/userViewModel'
import { UserInteractor } from '~/core/usecase/user/userInteractor'
import { BaseSection, Container } from '~/libs/baseComponets'
import { ACCENT_COLOR } from '~/libs/constant'

import { prisma } from '../core/infra/prisma'
import AnimalRepository from '../core/infra/prisma/repository/animalRepository'
import AnimalsPresenter from '../core/presenter/animal/animalsPresenter'
import { AnimalsViewModel } from '../core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '../core/usecase/animal/animalsInteractor'

const AuthSection = styled(BaseSection)``

const AuthButton = styled.button`
  display: block;
  font-size: 2rem;
  text-align: center;
  padding: 0.8rem;
  background: ${ACCENT_COLOR};
  color: white;
  border-radius: 10px;
  margin: 0 auto;
  width: 80%;
`

const StepTitle = styled.h2`
  font-size: 2.1rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 6px 4px 7px rgb(0 0 0 / 40%);
`

type Props = {
  animals: AnimalsViewModel[]
}

const Home: NextPage<Props> = ({ animals }) => {
  const { data: session } = useSession()

  const step1Component = session ? (
    ''
  ) : (
    <>
      <StepTitle>Step1</StepTitle>
      <AuthSection>
        <AuthButton onClick={() => signIn('auth0')}>ログイン</AuthButton>
      </AuthSection>
    </>
  )
  return (
    <div>
      <Container>
        {step1Component}
        <StepTitle>Step2</StepTitle>
        <AnimalSelectSection animals={animals} />
      </Container>
    </div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  const animals: AnimalsViewModel[] = await new AnimalsPresenter(
    new AnimalsInteractor(new AnimalRepository(prisma)),
  ).execute()

  if (session) {
    const user: UserViewModel | null = await new UserPresenter(
      new UserInteractor(new UserRepository(prisma, session?.user?.id)),
    ).execute()
  }

  return { props: { animals } }
}
