import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutAnimalInput } from "../inputs/UserUpdateWithoutAnimalInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutAnimalInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutAnimalInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAnimalInput, {
    nullable: false
  })
  data!: UserUpdateWithoutAnimalInput;
}
