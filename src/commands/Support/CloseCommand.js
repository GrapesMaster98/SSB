const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CloseCommand extends BaseCommand {
  constructor() {
    super('close', 'Support', []);
  }

  run(client, message, args) {
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('`401`');

    let sup = message.guild.roles.cache.find(r => r.name == 'Staff');
    if(!sup) return message.reply('`404` => Role not found');

    if(!message.member.roles.cache.has(sup.id)) return message.reply('Only staff can close tickets.');

    let cat = message.guild.channels.cache.find(c => c.name == 'tickets' && c.type == 'category');
    if(!cat) return message.reply('`404` => No ticket is open.');

    if(!message.channel.parent || message.channel.parent.id !== cat.id) return message.reply('This is not a ticket.');
    return message.channel.delete().catch(err => console.log(err));
  }
}