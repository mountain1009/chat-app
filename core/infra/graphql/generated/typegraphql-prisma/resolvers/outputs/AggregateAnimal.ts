import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCountAggregate } from "../outputs/AnimalCountAggregate";
import { AnimalMaxAggregate } from "../outputs/AnimalMaxAggregate";
import { AnimalMinAggregate } from "../outputs/AnimalMinAggregate";

@TypeGraphQL.ObjectType("AggregateAnimal", {
  isAbstract: true
})
export class AggregateAnimal {
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
