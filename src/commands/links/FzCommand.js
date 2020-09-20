const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FzCommand extends BaseCommand {
  constructor() {
    super('fz', 'support', []);
  }

  run(client, message, args) {
    message.channel.send('**FileZilla FTP Program**');
    message.channel.send('https://filezilla-project.org/download.php');
  }
}