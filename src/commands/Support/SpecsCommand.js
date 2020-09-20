const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SpecsCommand extends BaseCommand {
  constructor() {
    super('specs', 'Support', []);
  }

  run(client, message, args) {
    message.channel.send('**Our server specs** ⚡');
    message.channel.send('Intel Core i7 7700K \n1GBPs Bandiwch \nRam DDR4 2700Mhz \n\n**Locations** 🗺️ \n :flag_us: Los Angeles.');
  }
}