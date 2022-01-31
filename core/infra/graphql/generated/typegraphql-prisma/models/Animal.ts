import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { AnimalCount } from "../resolvers/outputs/AnimalCount";

@TypeGraphQL.ObjectType("Animal", {
  isAbstract: true
})
export class Animal {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  User?: User[];

  @TypeGraphQL.Field(_type => AnimalCount, {
    nullable: true
  })
  _count?: AnimalCount | null;
}
