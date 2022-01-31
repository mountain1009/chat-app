import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyAnimalInputEnvelope } from "../inputs/UserCreateManyAnimalInputEnvelope";
import { UserCreateOrConnectWithoutAnimalInput } from "../inputs/UserCreateOrConnectWithoutAnimalInput";
import { UserCreateWithoutAnimalInput } from "../inputs/UserCreateWithoutAnimalInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutAnimalInput } from "../inputs/UserUpdateManyWithWhereWithoutAnimalInput";
import { UserUpdateWithWhereUniqueWithoutAnimalInput } from "../inputs/UserUpdateWithWhereUniqueWithoutAnimalInput";
import { UserUpsertWithWhereUniqueWithoutAnimalInput } from "../inputs/UserUpsertWithWhereUniqueWithoutAnimalInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutAnimalInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutAnimalInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutAnimalInput], {
    nullable: true
  })
  create?: UserCreateWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutAnimalInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutAnimalInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyAnimalInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyAnimalInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutAnimalInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutAnimalInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutAnimalInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
