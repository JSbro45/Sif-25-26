import { PrismaClient } from '@prisma/client';


const prismaCl = () => new PrismaClient(); 
// No need to pass the url or provider, it's read from prisma.config.t
console.log('PrismaClient:', PrismaClient);

declare global {
  var prismaGlobal: ReturnType<typeof prismaCl> | undefined;
}

export const prisma = globalThis.prismaGlobal ?? prismaCl();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;