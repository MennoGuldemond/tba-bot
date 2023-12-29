const prisma = require('../db/client.js');

async function create(message, level) {
  try {
    const log = await prisma.client.log.create({
      data: {
        message,
        level,
      },
    });
    await prisma.client.$disconnect();
    return log;
  } catch (err) {
    console.error(err);
    return await prisma.client.$disconnect();
  }
}

module.exports = {
  create,
};
