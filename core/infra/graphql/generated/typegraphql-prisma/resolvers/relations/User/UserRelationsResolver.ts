import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Animal } from "../../../models/Animal";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Account], {
    nullable: false
  })
  async accounts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAccountsArgs): Promise<Account[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).accounts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSessionsArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).sessions(args);
  }

  @TypeGraphQL.FieldResolver(_type => Animal, {
    nullable: true
  })
  async Animal(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Animal | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Animal({});
  }
}
