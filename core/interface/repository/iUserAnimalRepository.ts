import Animal from '~/core/domains/animal'

export default interface IUserAnimalRepository {
  updateUserAnimal(animalId: Animal['id']): Promise<Error | void>
}
