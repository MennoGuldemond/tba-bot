const logRepository = require('../repositories/log.repository.js')

async function error(message) {
  return await logRepository.create(message, 'Error')
}

async function warning(message) {
  return await logRepository.create(message, 'Warning')
}

async function info(message) {
  return await logRepository.create(message, 'Info')
}

module.exports = {
  error,
  warning,
  info,
}
