import { PrismaClient } from "@prisma/client"

declare global {
  var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
  console.log("Prisma Client created for PRODUCTION")
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
    console.log("Prisma else")
  }
  prisma = global.cachedPrisma!
}

export const db = prisma
