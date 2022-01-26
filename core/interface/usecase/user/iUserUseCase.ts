import User from '~/core/domains/user'

export default interface IUserUseCase {
  handle(): Promise<User | null>
}
