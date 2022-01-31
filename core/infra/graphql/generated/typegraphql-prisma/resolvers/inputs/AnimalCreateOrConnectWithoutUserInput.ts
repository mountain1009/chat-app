import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCreateWithoutUserInput } from "../inputs/AnimalCreateWithoutUserInput";
import { AnimalWhereUniqueInput } from "../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.InputType("AnimalCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class AnimalCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: false
  })
  where!: AnimalWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnimalCreateWithoutUserInput, {
    nullable: false
  })
  create!: AnimalCreateWithoutUserInput;
}
