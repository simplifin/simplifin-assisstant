const BaseEvent = require('../../utils/structures/BaseEvent');
const chalk = require('chalk');
const ora = require('ora')

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
  }
}