const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TosCommand extends BaseCommand {
  constructor() {
    super('tos', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('https://skynethost.net/tos');
  }
}