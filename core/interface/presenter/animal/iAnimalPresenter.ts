import { AnimalViewModel } from '~/core/presenter/animal/animalViewModel'

export default interface IAnimalPresenter {
  execute(id: string): Promise<AnimalViewModel | null>
}
