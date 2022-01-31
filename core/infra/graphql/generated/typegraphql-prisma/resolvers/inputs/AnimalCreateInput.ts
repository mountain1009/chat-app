import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutAnimalInput } from "../inputs/UserCreateNestedManyWithoutAnimalInput";

@TypeGraphQL.InputType("AnimalCreateInput", {
  isAbstract: true
})
export class AnimalCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutAnimalInput, {
    nullable: true
  })
  User?: UserCreateNestedManyWithoutAnimalInput | undefined;
}
