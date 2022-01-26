import { PrismaClient } from '@prisma/client'

export default class BaseRepository {
  constructor(
    protected readonly prisma: PrismaClient,
    protected readonly userId?: string | null,
  ) {}

  protected userIdExist(): void {
    if (!this.userId) {
      throw new Error('ユーザーIDが存在しません。')
    }
  }
}
