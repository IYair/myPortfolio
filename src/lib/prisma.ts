import { PrismaClient, Session } from "@prisma/client";

const globalForPrisma = (globalThis as any) as { prisma: PrismaClient, session: Session };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "development") globalForPrisma.prisma = prisma;

export default prisma;