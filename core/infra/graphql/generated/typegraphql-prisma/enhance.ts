import { ClassType } from 'type-graphql'
import * as tslib from 'tslib'
import * as crudResolvers from './resolvers/crud/resolvers-crud.index'
import * as argsTypes from './resolvers/crud/args.index'
import * as actionResolvers from './resolvers/crud/resolvers-actions.index'
import * as relationResolvers from './resolvers/relations/resolvers.index'
import * as models from './models'
import * as outputTypes from './resolvers/outputs'
import * as inputTypes from './resolvers/inputs'

const crudResolversMap = {
  Animal: crudResolvers.AnimalCrudResolver,
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver,
}
const actionResolversMap = {
  Animal: {
    animal: actionResolvers.FindUniqueAnimalResolver,
    findFirstAnimal: actionResolvers.FindFirstAnimalResolver,
    animals: actionResolvers.FindManyAnimalResolver,
    createAnimal: actionResolvers.CreateAnimalResolver,
    createManyAnimal: actionResolvers.CreateManyAnimalResolver,
    deleteAnimal: actionResolvers.DeleteAnimalResolver,
    updateAnimal: actionResolvers.UpdateAnimalResolver,
    deleteManyAnimal: actionResolvers.DeleteManyAnimalResolver,
    updateManyAnimal: actionResolvers.UpdateManyAnimalResolver,
    upsertAnimal: actionResolvers.UpsertAnimalResolver,
    aggregateAnimal: actionResolvers.AggregateAnimalResolver,
    groupByAnimal: actionResolvers.GroupByAnimalResolver,
  },
  Account: {
    account: actionResolvers.FindUniqueAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    createAccount: actionResolvers.CreateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    deleteAccount: actionResolvers.DeleteAccountResolver,
    updateAccount: actionResolvers.UpdateAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    upsertAccount: actionResolvers.UpsertAccountResolver,
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
  },
  Session: {
    session: actionResolvers.FindUniqueSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    sessions: actionResolvers.FindManySessionResolver,
    createSession: actionResolvers.CreateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    deleteSession: actionResolvers.DeleteSessionResolver,
    updateSession: actionResolvers.UpdateSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    upsertSession: actionResolvers.UpsertSessionResolver,
    aggregateSession: actionResolvers.AggregateSessionResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
  },
  VerificationToken: {
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    findFirstVerificationToken:
      actionResolvers.FindFirstVerificationTokenResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
    createManyVerificationToken:
      actionResolvers.CreateManyVerificationTokenResolver,
    deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
    updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
    deleteManyVerificationToken:
      actionResolvers.DeleteManyVerificationTokenResolver,
    updateManyVerificationToken:
      actionResolvers.UpdateManyVerificationTokenResolver,
    upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
    aggregateVerificationToken:
      actionResolvers.AggregateVerificationTokenResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
  },
}
const crudResolversInfo = {
  Animal: [
    'animal',
    'findFirstAnimal',
    'animals',
    'createAnimal',
    'createManyAnimal',
    'deleteAnimal',
    'updateAnimal',
    'deleteManyAnimal',
    'updateManyAnimal',
    'upsertAnimal',
    'aggregateAnimal',
    'groupByAnimal',
  ],
  Account: [
    'account',
    'findFirstAccount',
    'accounts',
    'createAccount',
    'createManyAccount',
    'deleteAccount',
    'updateAccount',
    'deleteManyAccount',
    'updateManyAccount',
    'upsertAccount',
    'aggregateAccount',
    'groupByAccount',
  ],
  Session: [
    'session',
    'findFirstSession',
    'sessions',
    'createSession',
    'createManySession',
    'deleteSession',
    'updateSession',
    'deleteManySession',
    'updateManySession',
    'upsertSession',
    'aggregateSession',
    'groupBySession',
  ],
  User: [
    'user',
    'findFirstUser',
    'users',
    'createUser',
    'createManyUser',
    'deleteUser',
    'updateUser',
    'deleteManyUser',
    'updateManyUser',
    'upsertUser',
    'aggregateUser',
    'groupByUser',
  ],
  VerificationToken: [
    'verificationToken',
    'findFirstVerificationToken',
    'verificationTokens',
    'createVerificationToken',
    'createManyVerificationToken',
    'deleteVerificationToken',
    'updateVerificationToken',
    'deleteManyVerificationToken',
    'updateManyVerificationToken',
    'upsertVerificationToken',
    'aggregateVerificationToken',
    'groupByVerificationToken',
  ],
}
const argsInfo = {
  FindUniqueAnimalArgs: ['where'],
  FindFirstAnimalArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManyAnimalArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  CreateAnimalArgs: ['data'],
  CreateManyAnimalArgs: ['data', 'skipDuplicates'],
  DeleteAnimalArgs: ['where'],
  UpdateAnimalArgs: ['data', 'where'],
  DeleteManyAnimalArgs: ['where'],
  UpdateManyAnimalArgs: ['data', 'where'],
  UpsertAnimalArgs: ['where', 'create', 'update'],
  AggregateAnimalArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByAnimalArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  FindUniqueAccountArgs: ['where'],
  FindFirstAccountArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManyAccountArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  CreateAccountArgs: ['data'],
  CreateManyAccountArgs: ['data', 'skipDuplicates'],
  DeleteAccountArgs: ['where'],
  UpdateAccountArgs: ['data', 'where'],
  DeleteManyAccountArgs: ['where'],
  UpdateManyAccountArgs: ['data', 'where'],
  UpsertAccountArgs: ['where', 'create', 'update'],
  AggregateAccountArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByAccountArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  FindUniqueSessionArgs: ['where'],
  FindFirstSessionArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManySessionArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  CreateSessionArgs: ['data'],
  CreateManySessionArgs: ['data', 'skipDuplicates'],
  DeleteSessionArgs: ['where'],
  UpdateSessionArgs: ['data', 'where'],
  DeleteManySessionArgs: ['where'],
  UpdateManySessionArgs: ['data', 'where'],
  UpsertSessionArgs: ['where', 'create', 'update'],
  AggregateSessionArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupBySessionArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  FindUniqueUserArgs: ['where'],
  FindFirstUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  CreateUserArgs: ['data'],
  CreateManyUserArgs: ['data', 'skipDuplicates'],
  DeleteUserArgs: ['where'],
  UpdateUserArgs: ['data', 'where'],
  DeleteManyUserArgs: ['where'],
  UpdateManyUserArgs: ['data', 'where'],
  UpsertUserArgs: ['where', 'create', 'update'],
  AggregateUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByUserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  FindUniqueVerificationTokenArgs: ['where'],
  FindFirstVerificationTokenArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManyVerificationTokenArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  CreateVerificationTokenArgs: ['data'],
  CreateManyVerificationTokenArgs: ['data', 'skipDuplicates'],
  DeleteVerificationTokenArgs: ['where'],
  UpdateVerificationTokenArgs: ['data', 'where'],
  DeleteManyVerificationTokenArgs: ['where'],
  UpdateManyVerificationTokenArgs: ['data', 'where'],
  UpsertVerificationTokenArgs: ['where', 'create', 'update'],
  AggregateVerificationTokenArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
  ],
  GroupByVerificationTokenArgs: [
    'where',
    'orderBy',
    'by',
    'having',
    'take',
    'skip',
  ],
}

type ResolverModelNames = keyof typeof crudResolversMap

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof typeof crudResolversMap[TModel]['prototype']

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<ModelResolverActionNames<TModel> | '_all', MethodDecorator[]>
>

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>
}

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap
    const crudTarget = crudResolversMap[modelName].prototype
    const resolverActionsConfig = resolversEnhanceMap[modelName]!
    const actionResolversConfig = actionResolversMap[modelName]
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all
      const resolverActionNames =
        crudResolversInfo[modelName as keyof typeof crudResolversInfo]
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (
          actionResolversConfig[
            resolverActionName as keyof typeof actionResolversConfig
          ] as Function
        ).prototype
        tslib.__decorate(
          allActionsDecorators,
          crudTarget,
          resolverActionName,
          null,
        )
        tslib.__decorate(
          allActionsDecorators,
          actionTarget,
          resolverActionName,
          null,
        )
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      (it) => it !== '_all',
    )
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[]
      const actionTarget = (
        actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function
      ).prototype
      tslib.__decorate(decorators, crudTarget, resolverActionName, null)
      tslib.__decorate(decorators, actionTarget, resolverActionName, null)
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]['prototype'],
  number | symbol
>

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<
  ArgFieldNames<TArgsType>
>

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[]
  fields?: ArgFieldsConfig<TArgsType>
}

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>
}

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName =
      argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!
    const typeClass = argsTypes[argsTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    )
  }
}

const relationResolversMap = {
  Animal: relationResolvers.AnimalRelationsResolver,
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
}
const relationResolversInfo = {
  Animal: ['User'],
  Account: ['user'],
  Session: ['user'],
  User: ['accounts', 'sessions', 'Animal'],
}

type RelationResolverModelNames = keyof typeof relationResolversMap

type RelationResolverActionNames<TModel extends RelationResolverModelNames> =
  keyof typeof relationResolversMap[TModel]['prototype']

export type RelationResolverActionsConfig<
  TModel extends RelationResolverModelNames,
> = Partial<
  Record<RelationResolverActionNames<TModel> | '_all', MethodDecorator[]>
>

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>
}

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(
    relationResolversEnhanceMap,
  )) {
    const modelName =
      relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap
    const relationResolverTarget = relationResolversMap[modelName].prototype
    const relationResolverActionsConfig =
      relationResolversEnhanceMap[modelName]!
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all
      const relationResolverActionNames =
        relationResolversInfo[modelName as keyof typeof relationResolversInfo]
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(
          allActionsDecorators,
          relationResolverTarget,
          relationResolverActionName,
          null,
        )
      }
    }
    const relationResolverActionsToApply = Object.keys(
      relationResolverActionsConfig,
    ).filter((it) => it !== '_all')
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[]
      tslib.__decorate(
        decorators,
        relationResolverTarget,
        relationResolverActionName,
        null,
      )
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[]
  fields?: FieldsConfig
}

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | '_all', PropertyDecorator[]>
>

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object,
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[],
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass)
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(
          allFieldsDecorators,
          typePrototype,
          typeFieldName,
          void 0,
        )
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      (it) => it !== '_all',
    )
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0)
    }
  }
}

const modelsInfo = {
  Animal: ['id', 'name', 'image'],
  Account: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  Session: ['id', 'sessionToken', 'userId', 'expires'],
  User: ['id', 'name', 'email', 'emailVerified', 'image', 'animalId'],
  VerificationToken: ['identifier', 'token', 'expires'],
}

type ModelNames = keyof typeof models

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]['prototype'],
  number | symbol
>

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[]
  fields?: ModelFieldsConfig<TModel>
}

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>
}

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap
    const modelConfig = modelsEnhanceMap[modelName]!
    const modelClass = models[modelName]
    const modelTarget = modelClass.prototype
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    )
  }
}

const outputsInfo = {
  AggregateAnimal: ['_count', '_min', '_max'],
  AnimalGroupBy: ['id', 'name', 'image', '_count', '_min', '_max'],
  AggregateAccount: ['_count', '_avg', '_sum', '_min', '_max'],
  AccountGroupBy: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    '_count',
    '_avg',
    '_sum',
    '_min',
    '_max',
  ],
  AggregateSession: ['_count', '_min', '_max'],
  SessionGroupBy: [
    'id',
    'sessionToken',
    'userId',
    'expires',
    '_count',
    '_min',
    '_max',
  ],
  AggregateUser: ['_count', '_min', '_max'],
  UserGroupBy: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
    '_count',
    '_min',
    '_max',
  ],
  AggregateVerificationToken: ['_count', '_min', '_max'],
  VerificationTokenGroupBy: [
    'identifier',
    'token',
    'expires',
    '_count',
    '_min',
    '_max',
  ],
  AffectedRowsOutput: ['count'],
  AnimalCount: ['User'],
  AnimalCountAggregate: ['id', 'name', 'image', '_all'],
  AnimalMinAggregate: ['id', 'name', 'image'],
  AnimalMaxAggregate: ['id', 'name', 'image'],
  AccountCountAggregate: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    '_all',
  ],
  AccountAvgAggregate: ['expires_at'],
  AccountSumAggregate: ['expires_at'],
  AccountMinAggregate: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountMaxAggregate: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionCountAggregate: ['id', 'sessionToken', 'userId', 'expires', '_all'],
  SessionMinAggregate: ['id', 'sessionToken', 'userId', 'expires'],
  SessionMaxAggregate: ['id', 'sessionToken', 'userId', 'expires'],
  UserCount: ['accounts', 'sessions'],
  UserCountAggregate: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
    '_all',
  ],
  UserMinAggregate: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  UserMaxAggregate: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  VerificationTokenCountAggregate: ['identifier', 'token', 'expires', '_all'],
  VerificationTokenMinAggregate: ['identifier', 'token', 'expires'],
  VerificationTokenMaxAggregate: ['identifier', 'token', 'expires'],
}

type OutputTypesNames = keyof typeof outputTypes

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]['prototype'],
  number | symbol
>

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[]
  fields?: OutputTypeFieldsConfig<TOutput>
}

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>
}

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName =
      outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!
    const typeClass = outputTypes[outputTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    )
  }
}

const inputsInfo = {
  AnimalWhereInput: ['AND', 'OR', 'NOT', 'id', 'name', 'image', 'User'],
  AnimalOrderByWithRelationInput: ['id', 'name', 'image', 'User'],
  AnimalWhereUniqueInput: ['id', 'name'],
  AnimalOrderByWithAggregationInput: [
    'id',
    'name',
    'image',
    '_count',
    '_max',
    '_min',
  ],
  AnimalScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'name',
    'image',
  ],
  AccountWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    'user',
  ],
  AccountOrderByWithRelationInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    'user',
  ],
  AccountWhereUniqueInput: ['id', 'provider_providerAccountId'],
  AccountOrderByWithAggregationInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    '_count',
    '_avg',
    '_max',
    '_min',
    '_sum',
  ],
  AccountScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'sessionToken',
    'userId',
    'expires',
    'user',
  ],
  SessionOrderByWithRelationInput: [
    'id',
    'sessionToken',
    'userId',
    'expires',
    'user',
  ],
  SessionWhereUniqueInput: ['id', 'sessionToken'],
  SessionOrderByWithAggregationInput: [
    'id',
    'sessionToken',
    'userId',
    'expires',
    '_count',
    '_max',
    '_min',
  ],
  SessionScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'sessionToken',
    'userId',
    'expires',
  ],
  UserWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
    'accounts',
    'sessions',
    'Animal',
  ],
  UserOrderByWithRelationInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
    'accounts',
    'sessions',
    'Animal',
  ],
  UserWhereUniqueInput: ['id', 'email'],
  UserOrderByWithAggregationInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
    '_count',
    '_max',
    '_min',
  ],
  UserScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  VerificationTokenWhereInput: [
    'AND',
    'OR',
    'NOT',
    'identifier',
    'token',
    'expires',
  ],
  VerificationTokenOrderByWithRelationInput: ['identifier', 'token', 'expires'],
  VerificationTokenWhereUniqueInput: ['token', 'identifier_token'],
  VerificationTokenOrderByWithAggregationInput: [
    'identifier',
    'token',
    'expires',
    '_count',
    '_max',
    '_min',
  ],
  VerificationTokenScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'identifier',
    'token',
    'expires',
  ],
  AnimalCreateInput: ['id', 'name', 'image', 'User'],
  AnimalUpdateInput: ['id', 'name', 'image', 'User'],
  AnimalCreateManyInput: ['id', 'name', 'image'],
  AnimalUpdateManyMutationInput: ['id', 'name', 'image'],
  AccountCreateInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    'user',
  ],
  AccountUpdateInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
    'user',
  ],
  AccountCreateManyInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountUpdateManyMutationInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionCreateInput: ['id', 'sessionToken', 'expires', 'user'],
  SessionUpdateInput: ['id', 'sessionToken', 'expires', 'user'],
  SessionCreateManyInput: ['id', 'sessionToken', 'userId', 'expires'],
  SessionUpdateManyMutationInput: ['id', 'sessionToken', 'expires'],
  UserCreateInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'sessions',
    'Animal',
  ],
  UserUpdateInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'sessions',
    'Animal',
  ],
  UserCreateManyInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  UserUpdateManyMutationInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
  ],
  VerificationTokenCreateInput: ['identifier', 'token', 'expires'],
  VerificationTokenUpdateInput: ['identifier', 'token', 'expires'],
  VerificationTokenCreateManyInput: ['identifier', 'token', 'expires'],
  VerificationTokenUpdateManyMutationInput: ['identifier', 'token', 'expires'],
  StringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  UserListRelationFilter: ['every', 'some', 'none'],
  UserOrderByRelationAggregateInput: ['_count'],
  AnimalCountOrderByAggregateInput: ['id', 'name', 'image'],
  AnimalMaxOrderByAggregateInput: ['id', 'name', 'image'],
  AnimalMinOrderByAggregateInput: ['id', 'name', 'image'],
  StringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  StringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  IntNullableFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  UserRelationFilter: ['is', 'isNot'],
  AccountProviderProviderAccountIdCompoundUniqueInput: [
    'provider',
    'providerAccountId',
  ],
  AccountCountOrderByAggregateInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountAvgOrderByAggregateInput: ['expires_at'],
  AccountMaxOrderByAggregateInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountMinOrderByAggregateInput: [
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountSumOrderByAggregateInput: ['expires_at'],
  StringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  IntNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_avg',
    '_sum',
    '_min',
    '_max',
  ],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  SessionCountOrderByAggregateInput: [
    'id',
    'sessionToken',
    'userId',
    'expires',
  ],
  SessionMaxOrderByAggregateInput: ['id', 'sessionToken', 'userId', 'expires'],
  SessionMinOrderByAggregateInput: ['id', 'sessionToken', 'userId', 'expires'],
  DateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  DateTimeNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  AccountListRelationFilter: ['every', 'some', 'none'],
  SessionListRelationFilter: ['every', 'some', 'none'],
  AnimalRelationFilter: ['is', 'isNot'],
  AccountOrderByRelationAggregateInput: ['_count'],
  SessionOrderByRelationAggregateInput: ['_count'],
  UserCountOrderByAggregateInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  UserMaxOrderByAggregateInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  UserMinOrderByAggregateInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  DateTimeNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ['identifier', 'token'],
  VerificationTokenCountOrderByAggregateInput: [
    'identifier',
    'token',
    'expires',
  ],
  VerificationTokenMaxOrderByAggregateInput: ['identifier', 'token', 'expires'],
  VerificationTokenMinOrderByAggregateInput: ['identifier', 'token', 'expires'],
  UserCreateNestedManyWithoutAnimalInput: [
    'create',
    'connectOrCreate',
    'createMany',
    'connect',
  ],
  StringFieldUpdateOperationsInput: ['set'],
  UserUpdateManyWithoutAnimalInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  UserCreateNestedOneWithoutAccountsInput: [
    'create',
    'connectOrCreate',
    'connect',
  ],
  NullableStringFieldUpdateOperationsInput: ['set'],
  NullableIntFieldUpdateOperationsInput: [
    'set',
    'increment',
    'decrement',
    'multiply',
    'divide',
  ],
  UserUpdateOneRequiredWithoutAccountsInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'connect',
    'update',
  ],
  UserCreateNestedOneWithoutSessionsInput: [
    'create',
    'connectOrCreate',
    'connect',
  ],
  DateTimeFieldUpdateOperationsInput: ['set'],
  UserUpdateOneRequiredWithoutSessionsInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'connect',
    'update',
  ],
  AccountCreateNestedManyWithoutUserInput: [
    'create',
    'connectOrCreate',
    'createMany',
    'connect',
  ],
  SessionCreateNestedManyWithoutUserInput: [
    'create',
    'connectOrCreate',
    'createMany',
    'connect',
  ],
  AnimalCreateNestedOneWithoutUserInput: [
    'create',
    'connectOrCreate',
    'connect',
  ],
  NullableDateTimeFieldUpdateOperationsInput: ['set'],
  AccountUpdateManyWithoutUserInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  SessionUpdateManyWithoutUserInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'createMany',
    'set',
    'disconnect',
    'delete',
    'connect',
    'update',
    'updateMany',
    'deleteMany',
  ],
  AnimalUpdateOneWithoutUserInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'disconnect',
    'delete',
    'connect',
    'update',
  ],
  NestedStringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedStringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedStringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedIntNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedStringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_avg',
    '_sum',
    '_min',
    '_max',
  ],
  NestedFloatNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedDateTimeFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedDateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedDateTimeNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedDateTimeNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  UserCreateWithoutAnimalInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'sessions',
  ],
  UserCreateOrConnectWithoutAnimalInput: ['where', 'create'],
  UserCreateManyAnimalInputEnvelope: ['data', 'skipDuplicates'],
  UserUpsertWithWhereUniqueWithoutAnimalInput: ['where', 'update', 'create'],
  UserUpdateWithWhereUniqueWithoutAnimalInput: ['where', 'data'],
  UserUpdateManyWithWhereWithoutAnimalInput: ['where', 'data'],
  UserScalarWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'animalId',
  ],
  UserCreateWithoutAccountsInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'sessions',
    'Animal',
  ],
  UserCreateOrConnectWithoutAccountsInput: ['where', 'create'],
  UserUpsertWithoutAccountsInput: ['update', 'create'],
  UserUpdateWithoutAccountsInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'sessions',
    'Animal',
  ],
  UserCreateWithoutSessionsInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'Animal',
  ],
  UserCreateOrConnectWithoutSessionsInput: ['where', 'create'],
  UserUpsertWithoutSessionsInput: ['update', 'create'],
  UserUpdateWithoutSessionsInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'Animal',
  ],
  AccountCreateWithoutUserInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  AccountCreateOrConnectWithoutUserInput: ['where', 'create'],
  AccountCreateManyUserInputEnvelope: ['data', 'skipDuplicates'],
  SessionCreateWithoutUserInput: ['id', 'sessionToken', 'expires'],
  SessionCreateOrConnectWithoutUserInput: ['where', 'create'],
  SessionCreateManyUserInputEnvelope: ['data', 'skipDuplicates'],
  AnimalCreateWithoutUserInput: ['id', 'name', 'image'],
  AnimalCreateOrConnectWithoutUserInput: ['where', 'create'],
  AccountUpsertWithWhereUniqueWithoutUserInput: ['where', 'update', 'create'],
  AccountUpdateWithWhereUniqueWithoutUserInput: ['where', 'data'],
  AccountUpdateManyWithWhereWithoutUserInput: ['where', 'data'],
  AccountScalarWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'userId',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionUpsertWithWhereUniqueWithoutUserInput: ['where', 'update', 'create'],
  SessionUpdateWithWhereUniqueWithoutUserInput: ['where', 'data'],
  SessionUpdateManyWithWhereWithoutUserInput: ['where', 'data'],
  SessionScalarWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'sessionToken',
    'userId',
    'expires',
  ],
  AnimalUpsertWithoutUserInput: ['update', 'create'],
  AnimalUpdateWithoutUserInput: ['id', 'name', 'image'],
  UserCreateManyAnimalInput: ['id', 'name', 'email', 'emailVerified', 'image'],
  UserUpdateWithoutAnimalInput: [
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'accounts',
    'sessions',
  ],
  AccountCreateManyUserInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionCreateManyUserInput: ['id', 'sessionToken', 'expires'],
  AccountUpdateWithoutUserInput: [
    'id',
    'type',
    'provider',
    'providerAccountId',
    'refresh_token',
    'access_token',
    'expires_at',
    'token_type',
    'scope',
    'id_token',
    'session_state',
    'oauth_token_secret',
    'oauth_token',
  ],
  SessionUpdateWithoutUserInput: ['id', 'sessionToken', 'expires'],
}

type InputTypesNames = keyof typeof inputTypes

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]['prototype'],
  number | symbol
>

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[]
  fields?: InputTypeFieldsConfig<TInput>
}

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>
}

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName =
      inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!
    const typeClass = inputTypes[inputTypeName]
    const typeTarget = typeClass.prototype
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    )
  }
}
