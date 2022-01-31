import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCreateOrConnectWithoutUserInput } from "../inputs/AnimalCreateOrConnectWithoutUserInput";
import { AnimalCreateWithoutUserInput } from "../inputs/AnimalCreateWithoutUserInput";
import { AnimalWhereUniqueInput } from "../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.InputType("AnimalCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class AnimalCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => AnimalCreateWithoutUserInput, {
    nullable: true
  })
  create?: AnimalCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AnimalCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: AnimalCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: true
  })
  connect?: AnimalWhereUniqueInput | undefined;
}
