const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RuleCommand extends BaseCommand {
  constructor() {
    super('rule', 'Errors', []);
  }

  run(client, message, args) {
    const rules = ['1', '2', '3', '4', '5', '6', '7', '8'];
    if(message.content.includes(rules[0])) {
      message.delete();
      message.channel.send("`Rule 1:` **Don't tag staff.** They will answer when they have the chance.");
    }
    if(message.content.includes(rules[1])) {
      message.delete();
      message.channel.send("`Rule 2:` **DO NOT SPAM YOUR ISSUE.** You will win a free ticket to BanHammer-Land! :hammer:");
    }
    if(message.content.includes(rules[2])) {
      message.delete();
      message.channel.send("`Rule 3:` **Community members can also help solving issues.** Be nice to anyone that is helping you.");
    }
    if(message.content.includes(rules[3])) {
      message.delete();
      message.channel.send("`Rule 4:` **Moderate your language.** We are pretty lay back moderating insults, but please, behave yourself.");
    }
    if(message.content.includes(rules[4])) {
      message.delete();
      message.channel.send("`Rule 5:` **Do not use shortners.** Simple enough, send the link without any shortners.");
    }
    if(message.content.includes(rules[5])) {
      message.delete();
      message.channel.send("`Rule 6:` **DO NOT SHARE ANY LOGIN CREDENTIALS.** We are NOT going to ask for credentials, **NEVER**.");
    }
    if(message.content.includes(rules[6])) {
      message.delete();
      message.channel.send("`Rule 7:` **No advertising.** Clients and partners may advertise in the #ads channel, with moderation.");
    }    
  }
}