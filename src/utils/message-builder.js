const { AttachmentBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

function create(text, sceneId, options, oldOptionNumber = -1) {
  const file = new AttachmentBuilder(`./assets/${sceneId}.jpg`)
  const date = new Date()
  const embed = new EmbedBuilder().setDescription(text).setImage(`attachment://${sceneId}.jpg`).setTimestamp(date)
  const buttons = []

  for (let i = 0; i < options.length; i++) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(`${sceneId}.${options[i].id}.${i}.${date.getTime()}`)
        .setLabel(options[i].text)
        .setStyle(oldOptionNumber == i ? ButtonStyle.Success : ButtonStyle.Secondary)
        .setDisabled(oldOptionNumber >= 0)
    )
  }
  const actionRow = new ActionRowBuilder().addComponents(buttons)

  return {
    embeds: [embed],
    components: [actionRow],
    files: [file],
  }
}

module.exports = {
  create,
}
