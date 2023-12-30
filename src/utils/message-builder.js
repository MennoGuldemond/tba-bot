const { AttachmentBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

function create(scene, oldOptionNumber = -1) {
  const file = new AttachmentBuilder(`./assets/${scene.id}.jpg`)
  const date = new Date()
  const embed = new EmbedBuilder()
    .setTitle(scene.title)
    .setDescription(scene.text)
    .setImage(`attachment://${scene.id}.jpg`)
    .setTimestamp(date)
  const buttons = []

  for (let i = 0; i < scene.options.length; i++) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(`${scene.id}.${scene.options[i].id}.${i}.${date.getTime()}`)
        .setLabel(scene.options[i].text)
        .setStyle(oldOptionNumber == i ? ButtonStyle.Success : ButtonStyle.Secondary)
        .setDisabled(oldOptionNumber >= 0)
    )
  }
  const actionRow = new ActionRowBuilder().addComponents(buttons)

  return {
    embeds: [embed],
    components: [actionRow],
    ephemeral: true,
    files: [file],
  }
}

module.exports = {
  create,
}
