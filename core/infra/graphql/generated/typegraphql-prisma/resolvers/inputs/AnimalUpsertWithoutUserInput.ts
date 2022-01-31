import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCreateWithoutUserInput } from "../inputs/AnimalCreateWithoutUserInput";
import { AnimalUpdateWithoutUserInput } from "../inputs/AnimalUpdateWithoutUserInput";

@TypeGraphQL.InputType("AnimalUpsertWithoutUserInput", {
  isAbstract: true
})
export class AnimalUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => AnimalUpdateWithoutUserInput, {
    nullable: false
  })
  update!: AnimalUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => AnimalCreateWithoutUserInput, {
    nullable: false
  })
  create!: AnimalCreateWithoutUserInput;
}
