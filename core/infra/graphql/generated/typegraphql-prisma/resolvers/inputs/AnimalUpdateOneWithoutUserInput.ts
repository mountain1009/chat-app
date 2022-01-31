import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCreateOrConnectWithoutUserInput } from "../inputs/AnimalCreateOrConnectWithoutUserInput";
import { AnimalCreateWithoutUserInput } from "../inputs/AnimalCreateWithoutUserInput";
import { AnimalUpdateWithoutUserInput } from "../inputs/AnimalUpdateWithoutUserInput";
import { AnimalUpsertWithoutUserInput } from "../inputs/AnimalUpsertWithoutUserInput";
import { AnimalWhereUniqueInput } from "../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.InputType("AnimalUpdateOneWithoutUserInput", {
  isAbstract: true
})
export class AnimalUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => AnimalCreateWithoutUserInput, {
    nullable: true
  })
  create?: AnimalCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AnimalCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: AnimalCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => AnimalUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: AnimalUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: true
  })
  connect?: AnimalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AnimalUpdateWithoutUserInput, {
    nullable: true
  })
  update?: AnimalUpdateWithoutUserInput | undefined;
}
