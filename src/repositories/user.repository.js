const prisma = require('../db/client.js')
const logService = require('../services/log.service.js')

async function getById(id) {
  return prisma.client.user
    .findUnique({ where: { id: id } })
    .then(async (user) => {
      await prisma.client.$disconnect()
      return user
    })
    .catch(async (err) => {
      logService.error(JSON.stringify(err))
      return await prisma.client.$disconnect()
    })
}

async function create(user) {
  try {
    const newUser = prisma.client.user.create({
      data: {
        id: user.id,
        name: user.name,
      },
    })
    await prisma.client.$disconnect()
    return newUser
  } catch (err) {
    logService.error(JSON.stringify(err))
    return await prisma.client.$disconnect()
  }
}

async function findOrCreate(user) {
  const found = await getById(user.id)
  if (found) {
    return found
  }
  return await create(user)
}

module.exports = {
  getById,
  create,
  findOrCreate,
}
