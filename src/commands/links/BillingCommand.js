const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BillingCommand extends BaseCommand {
  constructor() {
    super('billing', 'links', []);
  }

  run(client, message, args) {
    message.channel.send('https://billing.skynethost.net');
  }
}