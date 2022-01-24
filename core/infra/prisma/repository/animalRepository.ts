import { PrismaClient } from '@prisma/client'

import Animal from '~/core/domains/animal'
import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'

export default class AnimalRepository implements IAnimalRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getAnimals() {
    return await this.prisma.animal.findMany()
  }
  async findAnimal(id: Animal['id']) {
    return await this.prisma.animal.findUnique({ where: { id } })
  }
}
