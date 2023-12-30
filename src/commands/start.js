const { SlashCommandBuilder } = require('@discordjs/builders')
const userService = require('../services/user.service')
const sceneService = require('../services/scene.service')

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
    const message = await user.send(firstScene.text)
    // message.react(one)
  },
}
