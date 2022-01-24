import Animal from '~/core/domains/animal'
import IAnimalsPresenter from '~/core/interface/presenter/animal/iAnimalsPresenter'
import { AnimalsViewModel } from '~/core/presenter/animal/animalsViewModel'
import { AnimalsInteractor } from '~/core/usecase/animal/animalsInteractor'

export default class AnimalsPresenter implements IAnimalsPresenter {
  private readonly interactor: AnimalsInteractor

  constructor(interactor: AnimalsInteractor) {
    this.interactor = interactor
  }

  async execute(): Promise<AnimalsViewModel[]> {
    const res = await this.interactor.handle()
    return res.map((v: Animal) => {
      return {
        id: v.id,
        name: v.name,
        image: '/images/' + v.image, // 画像表示のため加工
      }
    })
  }
}
