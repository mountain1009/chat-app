import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalUpdateInput } from "../../../inputs/AnimalUpdateInput";
import { AnimalWhereUniqueInput } from "../../../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalUpdateInput, {
    nullable: false
  })
  data!: AnimalUpdateInput;

  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: false
  })
  where!: AnimalWhereUniqueInput;
}
