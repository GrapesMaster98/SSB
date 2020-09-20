const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SupportCommand extends BaseCommand {
  constructor() {
    super('support', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('https://support.skynethost.net');
  }
}