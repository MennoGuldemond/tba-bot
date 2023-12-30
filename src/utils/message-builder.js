const { AttachmentBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

function create(text, imageName, options) {
  const file = new AttachmentBuilder(`./assets/${imageName}`)
  const embed = new EmbedBuilder().setDescription(text).setImage(`attachment://${imageName}`)
  const buttons = []

  for (let i = 0; i < options.length; i++) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(options[i].id.toString())
        .setLabel(options[i].text)
        .setStyle(ButtonStyle.Secondary)
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
