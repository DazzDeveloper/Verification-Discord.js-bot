const Discord = require("discord.js")
const config = require("./config.json")
const chalk = require("chalk")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });
client.config = config
module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})



console.clear()
console.log(chalk.hex(`4169E1`).bold(`[INDEX.JS] > Iniciando!`))
client.slashCommands = new Discord.Collection()

require('./Handler')(client)

client.login(config.token)
