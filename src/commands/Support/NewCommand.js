const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class NewCommand extends BaseCommand {
  constructor() {
    super('new', 'support', []);
  }  

  async run(client, message, args) {

    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('`401`');

    if(!args.join(' ')) {
      return message.channel.send('Correct usage: `s!new <reason>`');
    }
    const embed = new MessageEmbed()
    .setTitle('🎟️ **Skynet Support**')
    .setColor('AQUA')
    .setDescription('Thanks for creating a ticket, a staff member will answer as soon as posible. Please, **do not tag staff.**')
    .addField('Reason:', args.join(' '));

    let everyone = message.guild.roles.cache.find(r => r.name === '@everyone');

    let sup = message.guild.roles.cache.find(r => r.name === 'Staff');
    if(!sup) {
      return message.reply('`404` => Role not found.');
    }

    let name = message.author.tag.replace(/[^a-zA-z0-9]/, '').trim().toLowerCase();
    if(message.guild.channels.cache.find(c => c.name.replace(/-/g, ' ') == name)) return message.reply('You have already oppened a ticket!');

    let catCr = message.guild.channels.cache.find(c => c.name == 'tickets' && c.type === 'category');
    if(!catCr) return await message.guild.channels.create('tickets', {
      type: 'category'
    })

    return message.guild.channels.create(name, {
      type: 'text',
      permissionOverwrites: [
        {
          id: everyone.id,
          deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        },
        {
          id: sup.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        },
        {
          id: message.author.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        }
      ],
      parent: catCr.id
    }).then(m => m.send(embed)).catch(err => console.log(err));
  }
}