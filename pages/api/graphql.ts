import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'

import { resolvers } from '~/core/infra/graphql/generated/typegraphql-prisma'
import { prisma } from '~/core/infra/prisma'
const path = require('path')

export const config = {
  api: {
    bodyParser: false,
    // externalResolver: true,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const typeSchema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(
      __dirname,
      '../../core/infra/graphql/generated-schema.graphql',
    ),
    validate: true,
  })

  const apolloServer = new ApolloServer({
    schema: typeSchema,
    context: () => ({ prisma }),
  })

  await apolloServer.start()

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
