import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AnimalScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AnimalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AnimalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AnimalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AnimalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AnimalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  image?: StringWithAggregatesFilter | undefined;
}
