const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LinksCommand extends BaseCommand {
  constructor() {
    super('links', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('Usage `s!(link)` Example: `s!site`');
    message.channel.send({embed: {
      color: 'AQUA',
      description: '`site`, `panel`, `tos`, `support`, `billing`, `privacy`'
    }});
  }
}