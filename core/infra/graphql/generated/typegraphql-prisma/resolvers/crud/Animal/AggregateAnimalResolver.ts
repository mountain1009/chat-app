import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAnimalArgs } from "./args/AggregateAnimalArgs";
import { Animal } from "../../../models/Animal";
import { AggregateAnimal } from "../../outputs/AggregateAnimal";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Animal)
export class AggregateAnimalResolver {
  @TypeGraphQL.Query(_returns => AggregateAnimal, {
    nullable: false
  })
  async aggregateAnimal(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAnimalArgs): Promise<AggregateAnimal> {
    return getPrismaFromContext(ctx).animal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
