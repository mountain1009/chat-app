import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'
import IAnimalsUseCase from '~/core/interface/usecase/animal/iAnimalsUseCase'
export class AnimalsInteractor implements IAnimalsUseCase {
  private readonly repository: IAnimalRepository

  constructor(repository: IAnimalRepository) {
    this.repository = repository
  }
  async handle() {
    return this.repository.getAnimals()
  }
}
