import * as TypeGraphQL from "type-graphql";
import { Animal } from "../../../models/Animal";
import { User } from "../../../models/User";
import { AnimalUserArgs } from "./args/AnimalUserArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Animal)
export class AnimalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() animal: Animal, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AnimalUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).animal.findUnique({
      where: {
        id: animal.id,
      },
    }).User(args);
  }
}
