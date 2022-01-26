import Animal from '~/core/domains/animal'

export default interface IUserAnimalUseCase {
  handle(animalId: Animal['id']): Promise<void>
}
