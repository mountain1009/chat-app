import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalWhereUniqueInput } from "../../../inputs/AnimalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalWhereUniqueInput, {
    nullable: false
  })
  where!: AnimalWhereUniqueInput;
}
