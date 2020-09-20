const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PanelCommand extends BaseCommand {
  constructor() {
    super('panel', 'Support', []);
  }

  run(client, message, args) {
    message.channel.send('https://panel.skynethost.net - Powered by Pterodactyl! 🥳');
  }
}