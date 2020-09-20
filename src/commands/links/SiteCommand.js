const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SiteCommand extends BaseCommand {
  constructor() {
    super('site', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('https://skynethost.net');
  }
}