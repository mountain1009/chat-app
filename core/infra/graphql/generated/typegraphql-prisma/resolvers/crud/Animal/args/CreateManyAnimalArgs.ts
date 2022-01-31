import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnimalCreateManyInput } from "../../../inputs/AnimalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAnimalArgs {
  @TypeGraphQL.Field(_type => [AnimalCreateManyInput], {
    nullable: false
  })
  data!: AnimalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
