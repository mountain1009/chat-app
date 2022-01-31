import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalWhereInput } from "../inputs/AnimalWhereInput";

@TypeGraphQL.InputType("AnimalRelationFilter", {
  isAbstract: true
})
export class AnimalRelationFilter {
  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  is?: AnimalWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  isNot?: AnimalWhereInput | undefined;
}
