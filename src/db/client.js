const prismaClient = require('@prisma/client');

const prisma = new prismaClient.PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

module.exports = {
  client: prisma,
};
