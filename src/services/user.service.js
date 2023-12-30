const userRepository = require('../repositories/user.repository.js')

async function getById(id) {
  return await userRepository.getById(id)
}

async function create(user) {
  return await userRepository.create(user)
}

async function findOrCreate(user) {
  return await userRepository.findOrCreate(user)
}

async function update(user) {
  return await userRepository.update(user)
}

module.exports = {
  getById,
  create,
  findOrCreate,
  update,
}
