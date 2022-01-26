import Animal from '~/core/domains/animal'
import IUserAnimalRepository from '~/core/interface/repository/iUserAnimalRepository'
import IUserAnimalUseCase from '~/core/interface/usecase/user/iUserAnimalUseCase'

export class UserAnimalInteractor implements IUserAnimalUseCase {
  private readonly repository: IUserAnimalRepository

  constructor(repository: IUserAnimalRepository) {
    this.repository = repository
  }

  async handle(animalId: Animal['id']) {
    return await this.repository.updateUserAnimal(animalId)
  }
}
