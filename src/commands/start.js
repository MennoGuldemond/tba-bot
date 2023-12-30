const { SlashCommandBuilder } = require('@discordjs/builders')
const userService = require('../services/user.service')
const sceneService = require('../services/scene.service')
const messageBuilder = require('../utils/message-builder')

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Start a new game'),
  async execute(interaction) {
    const discordUser = await interaction.client.users.fetch(interaction.user.id, false)
    const user = await userService.findOrCreate({
      id: discordUser.id,
      name: discordUser.globalName,
    })
    const scene = await sceneService.getById(user.sceneId)
    const message = messageBuilder.create(scene)
    await interaction.reply(message)
  },
}
