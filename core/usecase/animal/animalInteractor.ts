import Animal from '~/core/domains/animal'
import IAnimalRepository from '~/core/interface/repository/iAnimalRepository'
import IAnimalUseCase from '~/core/interface/usecase/animal/iAnimalUseCase'

export class AnimalInteractor implements IAnimalUseCase {
  private readonly repository: IAnimalRepository

  constructor(repository: IAnimalRepository) {
    this.repository = repository
  }

  async handle(id: string): Promise<Animal | null> {
    return this.repository.findAnimal(id)
  }
}
