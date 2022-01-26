import { UserViewModel } from '~/core/presenter/user/userViewModel'

export default interface IUserPresenter {
  execute(): Promise<UserViewModel | null>
}
