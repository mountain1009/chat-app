import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalOrderByWithRelationInput } from "../../../inputs/AnimalOrderByWithRelationInput";
import { AnimalWhereInput } from "../../../inputs/AnimalWhereInput";
import { AnimalWhereUniqueInput } from "../../../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  where?: AnimalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnimalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AnimalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnimalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
