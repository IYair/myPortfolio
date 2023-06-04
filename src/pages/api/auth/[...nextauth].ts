import NextAuth, { DefaultSession, Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { store } from '@/store/store'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prisma'
import { JWT } from 'next-auth/jwt'
import { AdapterUser } from 'next-auth/adapters'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' }
      },
      async authorize(credentials: any, req) {
        return await store.dispatch.auth.login(credentials) as any
      }
    })
  ],
  adapter: PrismaAdapter(prisma),

  callbacks: {
    async signIn({user, account, profile}) {
      return true
    },
    async jwt({token, user }: {token: JWT, user: User}) {
      return { ...token, ...user }
    },
    async session({ session, token, user }: { session: Session; token: JWT; user: AdapterUser; }): Promise<Session | DefaultSession> {
      session.user = token;
      return session;
    }
  },
    
  
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60 * 24 // 24 hours
  },

  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
})
