import { PrismaClient } from './generated/prisma/client';

const prismaCl = new PrismaClient()


declare global {
  var prismaGlobal: ReturnType<typeof prismaCl> | undefined;
}

declare global {
  var prismaGlobal: ReturnType<typeof prismaCl> | undefined;
}

export const prisma = globalThis.prismaGlobal ?? prismaCl();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
