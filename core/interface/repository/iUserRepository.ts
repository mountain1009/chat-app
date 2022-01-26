import User from '~/core/domains/user'

export default interface IUserRepository {
  getUser(): Promise<User | null>
}
