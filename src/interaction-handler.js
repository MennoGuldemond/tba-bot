const userService = require('./services/user.service')
const sceneService = require('./services/scene.service')
const logService = require('./services/log.service')
const messageBuilder = require('./utils/message-builder')

async function handle(interaction) {
  //   const user = await userService.getById(interaction.user.id)
  // The customId property is a string formatted as "originSceneId.newSceneId.optionNumber.timestamp"
  const oldSceneId = interaction.customId.split('.')[0]
  const nextSceneId = interaction.customId.split('.')[1]
  const oldOptionNumber = interaction.customId.split('.')[2]

  try {
    const oldScene = await sceneService.getById(oldSceneId)
    const updatedMessage = messageBuilder.create(oldScene.text, oldScene.id, oldScene.options, oldOptionNumber)

    const nextScene = await sceneService.getById(nextSceneId)
    const newMessage = messageBuilder.create(nextScene.text, nextScene.id, nextScene.options)

    await interaction.update(updatedMessage)
    await interaction.followUp(newMessage)

    // TODO: save new user state (sceneId and stats/items)
    const user = await userService.getById(interaction.user.id)
    await userService.update({ ...user, sceneId: +nextSceneId })
  } catch (err) {
    console.log(err)
    logService.error(JSON.stringify(err))
  }
}

module.exports = {
  handle,
}
