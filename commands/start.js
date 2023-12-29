const { SlashCommandBuilder } = require('@discordjs/builders');
const packageJson = require('../package.json');

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Start a new game'),
  async execute(interaction) {
    await interaction.reply(`I'll send you a private message to get started.`);
    interaction.client.users.fetch(interaction.user.id, false).then((user) => {
      user.send('hello there');
    });
  },
};

// client.on('message', (msg) => {
//   if (!msg.author.bot) msg.author.send('ok ' + msg.author.id);
// });
