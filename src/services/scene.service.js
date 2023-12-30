const userRepository = require('../repositories/user.repository.js')

async function getById(id) {
  const scene = await userRepository.getById(id)
  scene.options = JSON.parse(scene.options)
}

module.exports = {
  getById,
}
