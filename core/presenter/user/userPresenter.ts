import Animal from '~/core/domains/animal'
import IUserPresenter from '~/core/interface/presenter/user/iUserPresenter'
import { UserInteractor } from '~/core/usecase/user/userInteractor'

export default class UserPresenter implements IUserPresenter {
  private readonly interactor: UserInteractor

  constructor(interactor: UserInteractor) {
    this.interactor = interactor
  }

  async execute() {
    const res = await this.interactor.handle()
    if (!res) return null

    const animal: Animal | null = res.Animal
      ? {
          id: res.Animal.id,
          name: res.Animal.name,
          image: res.Animal.image,
        }
      : null

    return {
      id: res.id ?? '',
      email: res.email ?? '',
      name: res.name ?? '',
      image: res.image ?? '',
      animal,
    }
  }
}
