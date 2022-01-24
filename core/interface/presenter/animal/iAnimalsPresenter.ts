import { AnimalsViewModel } from '~/core/presenter/animal/animalsViewModel'

export default interface IAnimalsPresenter {
  execute(): Promise<AnimalsViewModel[]>
}
