const fs = require("fs")
const chalk = require("chalk")

module.exports = async (client) => {


  const SlashsArray = []
  
  fs.readdir(`./SlashCommands`, (error, folder) => {
    folder.forEach(subfolder => {
      fs.readdir(`./SlashCommands/${subfolder}/`, (error, files) => {
        files.forEach(files => {

          if (!files?.endsWith('.js')) return;
          files = require(`../slashCommands/${subfolder}/${files}`);
          if (!files?.name) return;
          client.slashCommands.set(files?.name, files);
          console.log(chalk.hex(`4169E1`).bold(`[HANDLER] > SlashCommands carregados com sucesso!`))

          SlashsArray.push(files)

        });
      });
    });
  });

  fs.readdir(`./Events/`, (erro, folder) => {
    folder.forEach(subfolder => {
      fs.readdir(`./Events/${subfolder}/`, (erro, files) => {
        files.forEach(files => {
          if (!files.endsWith('.js')) return; require(`../Events/${subfolder}/${files}`);
          console.log(chalk.hex(`4169E1`).bold(`[HANDLER] > Eventos carregados com sucesso!`))
        });
      });
    });
  });

  client.on("ready", async () => {
    client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
  });

};