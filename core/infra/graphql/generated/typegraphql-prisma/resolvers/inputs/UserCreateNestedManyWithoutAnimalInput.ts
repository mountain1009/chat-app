import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyAnimalInputEnvelope } from "../inputs/UserCreateManyAnimalInputEnvelope";
import { UserCreateOrConnectWithoutAnimalInput } from "../inputs/UserCreateOrConnectWithoutAnimalInput";
import { UserCreateWithoutAnimalInput } from "../inputs/UserCreateWithoutAnimalInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutAnimalInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutAnimalInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutAnimalInput], {
    nullable: true
  })
  create?: UserCreateWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutAnimalInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyAnimalInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyAnimalInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
