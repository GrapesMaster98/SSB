const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PrivacyCommand extends BaseCommand {
  constructor() {
    super('privacy', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('https://skynethost.net/privacy-policy');
  }
}