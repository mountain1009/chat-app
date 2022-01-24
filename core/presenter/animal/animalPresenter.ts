import IAnimalPresenter from '~/core/interface/presenter/animal/iAnimalPresenter'
import { AnimalViewModel } from '~/core/presenter/animal/animalViewModel'
import { AnimalInteractor } from '~/core/usecase/animal/animalInteractor'

export default class AnimalPresenter implements IAnimalPresenter {
  private readonly interactor: AnimalInteractor

  constructor(interactor: AnimalInteractor) {
    this.interactor = interactor
  }

  async execute(id: string): Promise<AnimalViewModel | null> {
    const res = await this.interactor.handle(id)
    if (!res) return null

    return {
      id: res.id,
      name: res.name,
      image: '/images/' + res.image, // 画像表示のため加工
    }
  }
}
