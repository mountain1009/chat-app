import Animal from '~/core/domains/animal'
import BaseRepository from '~/core/infra/prisma/repository/base'
import IUserAnimal from '~/core/interface/repository/iUserAnimalRepository'

export default class UserAnimalRepository
  extends BaseRepository
  implements IUserAnimal
{
  async updateUserAnimal(animalId: Animal['id']) {
    const animal = await this.prisma.animal.findUnique({
      where: { id: animalId },
    })
    if (!animal) return new Error('animalが存在しません。')

    await this.prisma.user.update({
      where: {
        id: this.userId || '',
      },
      data: {
        Animal: {
          connect: {
            id: animal.id,
          },
        },
      },
    })
  }
}
