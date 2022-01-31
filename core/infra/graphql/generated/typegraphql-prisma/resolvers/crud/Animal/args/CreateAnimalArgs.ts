import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalCreateInput } from "../../../inputs/AnimalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalCreateInput, {
    nullable: false
  })
  data!: AnimalCreateInput;
}
