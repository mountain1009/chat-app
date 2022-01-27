import type { NextPage } from 'next'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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

const FinishSection = styled(BaseSection)`
  &:before {
    content: '●';
    color: red;
    font-size: 18px;
    position: fixed;
    top: -5%;
    left: 0;
    right: 0;
    margin: auto;
    text-shadow: 5vw -100px 2px, 10vw -400px 3px, 20vw -500px 4px,
      30vw -580px 1px, 39vw -250px 2px, 42vw -340px 5px, 56vw -150px 2px,
      63vw -180px 0, 78vw -220px 4px, 86vw -320px 9px, 94vw -170px 7px;
    animation: anim 15s linear infinite;
  }
  @keyframes anim {
    100% {
      color: transparent;
      top: 150%;
    }
  }
`

const ChatToLink = styled.a`
  cursor: pointer;
`

type Props = {
  animals: AnimalsViewModel[]
  hasAnimal: boolean
}

const Home: NextPage<Props> = ({ animals, hasAnimal }) => {
  const { data: session } = useSession()

  return (
    <div>
      <Container>
        {session ? (
          ''
        ) : (
          <>
            <StepTitle>Step1</StepTitle>
            <BaseSection>
              <AuthButton onClick={() => signIn('auth0')}>ログイン</AuthButton>
            </BaseSection>
          </>
        )}
        {hasAnimal ? (
          ''
        ) : (
          <>
            <StepTitle>Step2</StepTitle>
            <AnimalSelectSection animals={animals} />
          </>
        )}
        {session && hasAnimal ? (
          <>
            <StepTitle>Finish</StepTitle>
            <FinishSection>
              <Link href="/chats">
                <ChatToLink>掲示板に進む</ChatToLink>
              </Link>
              <Image
                src="/images/finish.svg"
                width={2000}
                height={1000}
                layout={'responsive'}
              />
            </FinishSection>
          </>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default Home

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await getSession(context)
  const animals: AnimalsViewModel[] = await new AnimalsPresenter(
    new AnimalsInteractor(new AnimalRepository(prisma)),
  ).execute()

  let hasAnimal = false

  if (session) {
    const user: UserViewModel | null = await new UserPresenter(
      new UserInteractor(new UserRepository(prisma, session?.user?.id)),
    ).execute()
    hasAnimal = user ? !!user.animal : false
  }

  return { props: { animals, hasAnimal } }
}
