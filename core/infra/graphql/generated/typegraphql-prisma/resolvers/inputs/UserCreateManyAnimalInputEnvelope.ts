import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyAnimalInput } from "../inputs/UserCreateManyAnimalInput";

@TypeGraphQL.InputType("UserCreateManyAnimalInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyAnimalInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyAnimalInput], {
    nullable: false
  })
  data!: UserCreateManyAnimalInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
