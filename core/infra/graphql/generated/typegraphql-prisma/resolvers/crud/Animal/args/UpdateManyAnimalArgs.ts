import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalUpdateManyMutationInput } from "../../../inputs/AnimalUpdateManyMutationInput";
import { AnimalWhereInput } from "../../../inputs/AnimalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnimalArgs {
  @TypeGraphQL.Field(_type => AnimalUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnimalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnimalWhereInput, {
    nullable: true
  })
  where?: AnimalWhereInput | undefined;
}
