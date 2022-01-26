import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { prisma } from '~/core/infra/prisma'
import UserAnimalRepository from '~/core/infra/prisma/repository/userAnimalRepository'
import UserAnimalPresenter from '~/core/presenter/user/userAnimalPresenter'
import { UserAnimalInteractor } from '~/core/usecase/user/userAnimalInteractor'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  const session = await getSession({ req })

  const userId: string | null = session?.user?.id || null

  if (!userId) {
    res.status(401)
  }

  switch (method) {
    case 'PUT':
      // eslint-disable-next-line no-case-declarations
      const data: { animalId: string } = JSON.parse(body)
      await new UserAnimalPresenter(
        new UserAnimalInteractor(new UserAnimalRepository(prisma, userId)),
      ).execute(data.animalId)
      res.status(204)
      break
    default:
      res.setHeader('Allow', ['PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
