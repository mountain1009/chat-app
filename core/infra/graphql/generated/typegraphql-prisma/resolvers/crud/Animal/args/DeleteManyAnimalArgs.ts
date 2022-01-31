import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalWhereInput } from "../../../inputs/AnimalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  where?: AnimalWhereInput | undefined;
}
