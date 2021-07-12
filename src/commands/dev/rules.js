const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('rules', 'dev', []);
  }

  async run(client, message, args) {

    if(!client.developers.includes(message.author.id)) return;
    const months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

    const ruleEmbed = new MessageEmbed()
    .setTitle("Discord Server Rules")
    .setAuthor("Simplifin Assisstant", client.user.avatarURL())
    .setColor("#dcfaf5")
    .setDescription("Hey, Welcome to our server. To help make the server better, we need **your** help. Please follow these rules to be a good samaritan. **We are a PG-13 Friendly Server Thus,**\n\bBreaking rules may end in punishments.")
    .addFields(
      { name: 'No Harassment', value: 'At Simplifin, We do not cooperate with any kind of harrassment or bullying. We expect you to keep this server friendly for everyone.' },
		  { name: 'No excessive profanity', value: 'We do not mind using swear words or curses within a limit. Please make sure you are not affecting anyone and keep everything within limits.'},
		  { name: 'No sending IP grabbers, malicious links', value: 'Please respect everyone\'s privacy. We request you not to send any IP grabbers or links which may by inappropriate.'},
		  { name: 'Do Not Beg', value: 'We ask you not to beg. As we have invite rewards and levelling rewards set up for servers. Please help us grow and dont beg. Your invites will be validated by account age and a profanity filter. Thus making alts is not helpful'},
		  { name: 'No adult content', value: 'We are trying to keep this server PG Friendly. Thus we are asking you to help us in doing so. Your content will be scanned and there will be severe punishment if this rule is broken.'},
    )
    .setFooter(`Simplifin Hosting | Last updated at ${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`);
    message.channel.send(ruleEmbed);
  }
}