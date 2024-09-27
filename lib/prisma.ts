import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (!global.prisma) {
  prisma = new PrismaClient();
  global.prisma = prisma;
} else {
  prisma = global.prisma;
}

export { prisma };
