const prisma = require('../db/client.js')
const logService = require('../services/log.service.js')

async function getById(id) {
  return prisma.client.scene
    .findUnique({ where: { id: id } })
    .then(async (scene) => {
      await prisma.client.$disconnect()
      return scene
    })
    .catch(async (err) => {
      logService.error(JSON.stringify(err))
      return await prisma.client.$disconnect()
    })
}

module.exports = {
  getById,
}
