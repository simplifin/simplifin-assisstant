const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('help', 'misc', ['h']);
  }

  async run(client, message, args) {
    message.channel.send('Help command works');
  }
}