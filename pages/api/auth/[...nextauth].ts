import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

import { prisma } from '../../../core/infra/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub ?? ''
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
})
