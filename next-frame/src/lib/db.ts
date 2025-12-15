import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient(); // No need to pass the url or provider, it's read from prisma.config.t
console.log('PrismaClient:', PrismaClient);


