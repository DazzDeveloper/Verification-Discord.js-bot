const client = require('../../index');
const Discord = require("discord.js")
const chalk = require("chalk");

client.on(`ready`, async() => {


// fique a vontade para mudar! //
  let status = [
    `🔥 github.com/DazzDeveloper!`,
    `🔥 #1`,
    `🔥 #2`,
    `🔥 #3`,
    `🔥 #4`,
  ]
  i = 1
  
  setInterval(() =>{
  client.user.setActivity(`${status[i++ % status.length]}`, { 
  })
  }, 500 * 10);


    console.log(chalk.hex(`4169E1`).bold(`[READY.JS] > Estou online como: ${client.user.username}`))
});