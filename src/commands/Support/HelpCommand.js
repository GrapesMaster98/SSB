const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'support', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setColor('AQUA')
    .setTitle('Commands')
    .setDescription('My commands! :D')
    .addField('help', "I don't know....", false)
    .addField('links', "Show a list of links that I can send!", false)
    .addField('logs', "I will send a link to a page where you can paste your console logs and share them with us!", false)
    .addField('help', "I don't know....", false)
    .addField('rule [number]', "Show an specific rule.", false)
    .addField('ticket', "How do I make a ticket?", false)
    .addField('specs', "Server specs.", false)

    message.channel.send(embed);
  }
}