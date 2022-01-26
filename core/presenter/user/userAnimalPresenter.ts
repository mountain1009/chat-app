import Animal from '~/core/domains/animal'
import IUserAnimalPresenter from '~/core/interface/presenter/user/iUserAnimalPresenter'
import { UserAnimalInteractor } from '~/core/usecase/user/userAnimalInteractor'

export default class UserAnimalPresenter implements IUserAnimalPresenter {
  private readonly interactor: UserAnimalInteractor

  constructor(interactor: UserAnimalInteractor) {
    this.interactor = interactor
  }

  async execute(animalId: Animal['id']) {
    await this.interactor.handle(animalId)
  }
}
