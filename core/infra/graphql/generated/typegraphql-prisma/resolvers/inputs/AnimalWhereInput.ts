import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("AnimalWhereInput", {
  isAbstract: true
})
export class AnimalWhereInput {
  @TypeGraphQL.Field(_type => [AnimalWhereInput], {
    nullable: true
  })
  AND?: AnimalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimalWhereInput], {
    nullable: true
  })
  OR?: AnimalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimalWhereInput], {
    nullable: true
  })
  NOT?: AnimalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  User?: UserListRelationFilter | undefined;
}
