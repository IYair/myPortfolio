import 'reflect-metadata'
import 'ts-tiny-invariant'
import Cors from 'micro-cors'
import { buildSchema } from 'type-graphql'
import { ApolloServer, gql } from 'apollo-server-micro'
import { resolvers } from  '../../../prisma/generated/type-graphql'
import { PrismaClient } from '@prisma/client'
import  prisma  from '../../../config/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({ allowMethods: ['POST', 'GET', 'OPTIONS', 'HEAD'] })

interface Context {
    prisma: PrismaClient
}

export const config = {
    api: {
        bodyParser: false,
    },
}

const functionServidorGraphQL = async (req:NextApiRequest , res: NextApiResponse) => {
    const schema = await buildSchema({
        resolvers: resolvers,
        validate: false,
    })
    const graphQLServer = new ApolloServer({ 
        schema: schema,
        context: ():Context => ({prisma}),
        introspection: true,
    }) 
    
    const startServer = graphQLServer.start()
    await startServer
    return graphQLServer.createHandler({ path: '/api/graphql' })(req, res)
} 

export default cors((req: any , res: any) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    return functionServidorGraphQL(req, res) 
})
