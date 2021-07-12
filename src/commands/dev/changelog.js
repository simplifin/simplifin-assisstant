const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('changelog', 'misc', ['ch']);
  }

  async run(client, message, args) {
    if(!client.developers.includes(message.author.id)) return;
    const questions = [`${message.author}, Please enter the points to include in the changelog. If any attachments, Please include them with the message. **You Have 2 Minutes before the collector ends.** If you want to exit, please enter "exit" in the chat.`];
    const filter = m => (m.author.id === message.author.id) && (m.channel = message.channel);
    const collector = await message.channel.createMessageCollector(filter, {time : 120000});
    const i = 0;
    await message.channel.send(questions[i]);
    const response = [];
    const chembed = new MessageEmbed()
    .setTitle(`New Changelog from ${message.author.username}#${message.author.discriminator}.`)
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setAuthor('Simplifin Assisstant', client.user.displayAvatarURL())
    .setTimestamp()
    collector.on('collect', async (c) => {
      if(c.content.toLowerCase() === "exit") {
        return collector.stop('EXIT')
      } else {
        chembed.setDescription(c.content);
      }
      if(c.attachments) {
        let attachments = c.attachments;
        for (let a of attachments) {
          chembed.setImage(a[1].url)
        }
      }
      return collector.stop('DONE')
    });

    collector.on('end', (collected, reason) => {
      if (reason === 'DONE') {
        client.channels.cache.get('862862894935572490').send(chembed);
      }
      else if (reason === "EXIT") {
        message.channel.send(`${message.author}, I stopped the collector as per your instructions.`);
      }
    });
  }
}