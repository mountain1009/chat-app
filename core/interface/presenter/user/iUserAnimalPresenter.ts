import Animal from '~/core/domains/animal'

export default interface IUserAnimalPresenter {
  execute(animalId: Animal['id']): Promise<void>
}
