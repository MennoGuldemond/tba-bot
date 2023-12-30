const { AttachmentBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

function create(scene, oldOptionNumber = -1) {
  const file = new AttachmentBuilder(`./assets/${scene.id}.jpg`)
  const date = new Date()
  const buttons = []
  const fields = []
  const texts = scene.text.split('**')
  for (let i = 0; i < texts.length; i++) {
    fields.push({
      name: '\u200b',
      value: texts[i], // Max field value is 1024
    })
  }

  const embed = new EmbedBuilder()
    .setTitle(scene.title)
    .setImage(`attachment://${scene.id}.jpg`)
    .setTimestamp(date)
    .setFields(fields)

  for (let i = 0; i < scene.options.length; i++) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(`${scene.id}.${scene.options[i].id}.${i}.${date.getTime()}`)
        .setLabel(scene.options[i].text)
        .setStyle(oldOptionNumber == i ? ButtonStyle.Primary : ButtonStyle.Secondary)
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
