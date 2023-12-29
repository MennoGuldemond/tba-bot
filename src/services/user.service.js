const userRepository = require('../repositories/user.repository.js');

async function getById(id) {
  return await userRepository.getById(id);
}

async function create(userProfile) {
  return await userRepository.create(userProfile);
}

module.exports = {
  getById,
  create,
};
