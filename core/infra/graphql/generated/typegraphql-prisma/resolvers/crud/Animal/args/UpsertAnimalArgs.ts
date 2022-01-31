import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalCreateInput } from "../../../inputs/AnimalCreateInput";
import { AnimalUpdateInput } from "../../../inputs/AnimalUpdateInput";
import { AnimalWhereUniqueInput } from "../../../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: false
  })
  where!: AnimalWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnimalCreateInput, {
    nullable: false
  })
  create!: AnimalCreateInput;

  @TypeGraphQL.Field(_type => AnimalUpdateInput, {
    nullable: false
  })
  update!: AnimalUpdateInput;
}
