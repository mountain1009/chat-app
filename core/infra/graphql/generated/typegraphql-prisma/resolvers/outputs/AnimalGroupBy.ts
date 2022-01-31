import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCountAggregate } from "../outputs/AnimalCountAggregate";
import { AnimalMaxAggregate } from "../outputs/AnimalMaxAggregate";
import { AnimalMinAggregate } from "../outputs/AnimalMinAggregate";

@TypeGraphQL.ObjectType("AnimalGroupBy", {
  isAbstract: true
})
export class AnimalGroupBy {
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

  @TypeGraphQL.Field(_type => AnimalCountAggregate, {
    nullable: true
  })
  _count!: AnimalCountAggregate | null;

  @TypeGraphQL.Field(_type => AnimalMinAggregate, {
    nullable: true
  })
  _min!: AnimalMinAggregate | null;

  @TypeGraphQL.Field(_type => AnimalMaxAggregate, {
    nullable: true
  })
  _max!: AnimalMaxAggregate | null;
}
