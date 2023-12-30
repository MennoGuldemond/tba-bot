require('dotenv').config()
const fs = require('node:fs')
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const interactionHandler = require('./interaction-handler')

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
})

client.commands = new Collection()
const commandFiles = fs.readdirSync('src/commands').filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.data.name, command)
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
  // Respond to button presses of users on our story embeds
  if (interaction.isButton()) {
    return await interactionHandler.handle(interaction)
  }

  // If it was not a button press, only respond to commands
  if (!interaction.isCommand()) return

  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    })
  }
})

client.login(process.env.BOT_TOKEN)
