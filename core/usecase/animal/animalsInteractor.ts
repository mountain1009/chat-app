import Animal from '~/core/domains/animal'
import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'
import IAnimalsUseCase from '~/core/interface/usecase/animal/iAnimalsUseCase'
export class AnimalsInteractor implements IAnimalsUseCase {
  private readonly repository: IAnimalRepository

  constructor(repository: IAnimalRepository) {
    this.repository = repository
  }
  async handle(): Promise<Animal[]> {
    return this.repository.getAnimals()
  }
}
