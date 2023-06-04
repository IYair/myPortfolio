import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

async function main() {
  try {
    await prisma.$connect()
    const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
    console.log(`Connection to database was successful. Result: ${result.result}`)
  } catch (error) {
    console.error(`Unable to connect to database: ${error}`)
  } finally {
    await prisma.$disconnect()
  }
}

main()

export default prisma