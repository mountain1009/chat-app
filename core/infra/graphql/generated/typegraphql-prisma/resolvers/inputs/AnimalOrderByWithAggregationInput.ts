import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnimalCountOrderByAggregateInput } from "../inputs/AnimalCountOrderByAggregateInput";
import { AnimalMaxOrderByAggregateInput } from "../inputs/AnimalMaxOrderByAggregateInput";
import { AnimalMinOrderByAggregateInput } from "../inputs/AnimalMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AnimalOrderByWithAggregationInput", {
  isAbstract: true
})
export class AnimalOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AnimalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AnimalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnimalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AnimalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AnimalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AnimalMinOrderByAggregateInput | undefined;
}
