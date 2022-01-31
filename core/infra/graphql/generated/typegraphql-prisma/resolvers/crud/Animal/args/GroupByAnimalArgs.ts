import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalOrderByWithAggregationInput } from "../../../inputs/AnimalOrderByWithAggregationInput";
import { AnimalScalarWhereWithAggregatesInput } from "../../../inputs/AnimalScalarWhereWithAggregatesInput";
import { AnimalWhereInput } from "../../../inputs/AnimalWhereInput";
import { AnimalScalarFieldEnum } from "../../../../enums/AnimalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  where?: AnimalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnimalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AnimalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "image">;

  @TypeGraphQL.Field(_type => AnimalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AnimalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
