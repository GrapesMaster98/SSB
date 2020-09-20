const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Message } = require('discord.js');

module.exports = class SendCommand extends BaseCommand {
  constructor() {
    super('send', 'other', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setColor('AQUA')
    .setImage('https://media.giphy.com/media/i6AzBEzUy5GZpUoWRl/giphy.gif');

    message.channel.send(embed);
    const embed2 = new MessageEmbed()
    .setColor('AQUA')
    .addField("📜 `Don't tag the staff!`", 'Do not tag any staff member, we will answer you when we can, this also counts inside tickets', false)
    .addField("📜 `Don't spam your issue in other channels`", 'Please, do not send your issue in every channel, nobody likes that and you will be banned for spamming.', false)
    .addField("📜 `Respect everybody`", 'We are here to help, even the community members, so please, be nice with anyone that is helping you.', false)
    .addField("📜 `Modarate your language`", "We´re pretty lay back with moderating insults, but please, behave yourself.", false)
    .addField("📜 `NO SHORTENED LINKS`", 'If you are going to post a link, do it wthout any shortener.', false)
    .addField("📜 `Do not share your passwords`", "We are NOT going to ask for your login credentials, please, avoid posting them.", false)
    .addField("📜 `Do not advertise anything`", "Don't post your youtube channel, discord server, minecraft server, etc. We really don't care. *Clients may advertise their servers in their respective channel.*", false)    

    message.channel.send(embed2); 

    /*const embed3 = new MessageEmbed()
    .setColor('RED')
    .setImage('https://media.giphy.com/media/5B46j0Eat3HsO4Io0g/giphy.gif');

    message.channel.send(embed3);

    message.channel.send({embed: {
      color: 'RED',
      description: 'Welcome to the **SkynetHost.net Official Discord Server!** 🎉 \nWe are happy to have you here and we are ready to answer your questions! \n\nProviding fast and powerfull services with **99.99% uptime** at **affordable prices!** Anynoe can have their own server with us! \n\n\n**Got any questions?** \nWe have an **incredible community** that can help you solve your issues as well as an **awesome and friendly staff team**, we are going to help no matter what! \nGo ahead and ask them in #community-support! :D \n\n\nWe are happy to have you here, enjoy your stay! \n\n\n https://skynethost.net - **Website** \n https://panel.skynethost.net - **Panel** \n https://support.skynethost.net - **Help Center**'
    }});  */

    /*const embed4 = new MessageEmbed()
    .setColor('GREEN')
    .setImage('https://media.giphy.com/media/g5l88gZn8rjcWLzG3p/giphy.gif');

    message.channel.send(embed4); 

    message.channel.send({embed: {
      color: 'GREEN',
      description: '**Skynet Host Partner Program** \nInterested in joining our partner program? 🛡️ \n\nOur partner program allows you to have acces to a **free server** soy you can host anything for your followers or friends! As well as giving you a **discount code** 🎉 \n\n**What do you need to apply?** \n An active fan base on any social media and a great atitude! \n\n **Ready to join?** Great! Go to https://skynethost.net/partners to start your journey with us! 🥳'
    }}) */
  }
}