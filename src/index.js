const chalk = require('chalk');
const mysql = require('mysql');
const ora = require('ora');
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

(async () => {
  client.developers = ['706529084662087690','802292606138449920'];
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  const dspin = ora(chalk.magentaBright("Connecting To Discord Client...")).start();
  var st = new Date().getTime(); 
  await client.login(config.token);
  var dt = new Date().getTime();
  dspin.succeed(chalk.greenBright(`[BOOT] ${chalk.whiteBright(">>")} Connected to Discord in ${chalk.whiteBright(`${dt-st}ms`)}`));
})();

