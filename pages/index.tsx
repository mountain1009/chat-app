import type { NextPage } from 'next'
import Link from 'next/link'

import CircleSelectList from '../components/molecules/CircleSelectList'
import { prisma } from '../core/infra/prisma'
import AnimalRepository from '../core/infra/prisma/repository/animalRepository'
import AnimalsPresenter from '../core/presenter/animal/animalsPresenter'
import { AnimalsViewModel } from '../core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '../core/usecase/animal/animalsInteractor'

const Home: NextPage = ({ animals }) => {
  return (
    <>
      <div>
        <header>
          <ul>
            <li>
              <Link href="/test">test</Link>
            </li>
          </ul>
        </header>
        <main>
          <CircleSelectList items={animals} />
        </main>
        <footer />
      </div>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  // const animals = await prisma.animal.findMany()
  // console.log('animals:', animals)
  const presenter = new AnimalsPresenter(
    new AnimalsInteractor(new AnimalRepository(prisma)),
  )

  const animals: AnimalsViewModel[] = await presenter.execute()

  return { props: { animals } }
}
