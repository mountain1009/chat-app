import BaseRepository from '~/core/infra/prisma/repository/base'
import IUserRepository from '~/core/interface/repository/iUserRepository'

export default class UserRepository
  extends BaseRepository
  implements IUserRepository
{
  async getUser() {
    this.userIdExist()

    return await this.prisma.user.findUnique({
      where: { id: this.userId || '' },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        Animal: true,
      },
    })
  }
}
