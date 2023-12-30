const sceneRepository = require('../repositories/scene.repository.js')

async function getById(id) {
  const scene = await sceneRepository.getById(id)
  scene.options = JSON.parse(scene.options)
  return scene
}

module.exports = {
  getById,
}
