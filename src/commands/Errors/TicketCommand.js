const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('ticket', 'Errors', []);
  }

  run(client, message, args) {
    message.channel.send('To make a ticket, go to #tickets and follow the instructions.');
  }
}