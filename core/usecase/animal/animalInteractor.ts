import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'
import IAnimalUseCase from '~/core/interface/usecase/animal/iAnimalUseCase'

export class AnimalInteractor implements IAnimalUseCase {
  private readonly repository: IAnimalRepository

  constructor(repository: IAnimalRepository) {
    this.repository = repository
  }

  async handle(id: string) {
    return this.repository.findAnimal(id)
  }
}
