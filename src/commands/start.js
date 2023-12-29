const { SlashCommandBuilder } = require('@discordjs/builders');
const userService = require('../services/user.service');

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Start a new game'),
  async execute(interaction) {
    await interaction.reply(`I'll send you a private message to get started.`);
    interaction.client.users.fetch(interaction.user.id, false).then((user) => {
      userService.create({
        id: user.id,
        name: user.globalName,
      });
      user.send('hello there');
    });
  },
};
