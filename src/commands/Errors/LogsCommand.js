const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class LogsCommand extends BaseCommand {
  constructor() {
    super('logs', 'Errors', []);
  }

  run(client, message, args) {
    message.channel.send('We need to see your server logs. Paste your logs to https://mclo.gs/ so we can assit you.');
  }
}