import Animal from '~/core/domains/animal'
import BaseRepository from '~/core/infra/prisma/repository/base'
import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'

export default class AnimalRepository
  extends BaseRepository
  implements IAnimalRepository
{
  async getAnimals() {
    return await this.prisma.animal.findMany()
  }
  async findAnimal(id: Animal['id']) {
    return await this.prisma.animal.findUnique({ where: { id } })
  }
}
