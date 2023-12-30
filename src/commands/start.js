const { SlashCommandBuilder } = require('@discordjs/builders')
const userService = require('../services/user.service')
const sceneService = require('../services/scene.service')
const messageBuilder = require('../utils/message-builder')

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Start a new game'),
  async execute(interaction) {
    await interaction.reply(`I'll send you a private message to get started.`)
    const user = await interaction.client.users.fetch(interaction.user.id, false)
    userService.findOrCreate({
      id: user.id,
      name: user.globalName,
    })
    const firstScene = await sceneService.getById(1)
    const message = messageBuilder.create(firstScene.text, firstScene.imageName, firstScene.options)
    // interaction.reply(message)
    await user.send(message)
    // const message = await user.send(firstScene.text)
    // message.react(one)
  },
}
