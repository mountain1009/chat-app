import * as TypeGraphQL from "type-graphql";

export enum AnimalScalarFieldEnum {
  id = "id",
  name = "name",
  image = "image"
}
TypeGraphQL.registerEnumType(AnimalScalarFieldEnum, {
  name: "AnimalScalarFieldEnum",
  description: undefined,
});
