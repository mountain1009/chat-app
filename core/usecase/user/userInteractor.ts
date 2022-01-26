import IUserRepository from '~/core/interface/repository/iUserRepository'
import IUserUseCase from '~/core/interface/usecase/user/iUserUseCase'

export class UserInteractor implements IUserUseCase {
  private readonly repository: IUserRepository

  constructor(repository: IUserRepository) {
    this.repository = repository
  }

  async handle() {
    return this.repository.getUser()
  }
}
