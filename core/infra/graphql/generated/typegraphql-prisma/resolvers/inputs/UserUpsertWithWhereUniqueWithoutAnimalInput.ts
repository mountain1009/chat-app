import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAnimalInput } from "../inputs/UserCreateWithoutAnimalInput";
import { UserUpdateWithoutAnimalInput } from "../inputs/UserUpdateWithoutAnimalInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutAnimalInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutAnimalInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAnimalInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAnimalInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAnimalInput, {
    nullable: false
  })
  create!: UserCreateWithoutAnimalInput;
}
