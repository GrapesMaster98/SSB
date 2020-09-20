const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
    const file = ['ftp', 'files', 'upload files', 'sftp'];
    if(file.some(word => message.content.toLowerCase().includes(word))) {
      message.reply('**Hey there buddy!** :wave:');
      message.channel.send('To upload files to your server go to: `Settings > SFTP` copy your credentials and put them in an FTP program.');
      message.channel.send('We recommend using **FileZilla** you can get the link using `-fz`')
    }

    const world = ['please correct your syntax errors'];
    if(world.some(word => message.content.toLowerCase().includes(word))) {            
      message.channel.send(`Seems like you have an error in an YML file. :thinking: \nPlease paste your .yml file here: https://yamllint.com/ to see any errors. If you have any question, open a ticket.`);
    }

    const sup = ['help'];
    if(message.content.startsWith(client.prefix)) return;
    if(sup.some(word => message.content.toLowerCase().includes(word))) {      
      message.react('👋')
      message.channel.send(`:wave: Hello and welcome to the **Skynet Host official Discord Server** ${message.author} ! We are happy to have you here and we will be more than happy to help you solve any issue you have, but we are going to need a little bit more of information. \n\nPlease be sure to send any relevant information and paste your console logs so we can assist you! You can paste your logs to https://mclo.gs`);
    }

    /* Spoanish Variants */

    const fileEs = ['ftp', 'archivos', 'subir archivos', 'sftp'];
    if(fileEs.some(word => message.content.toLowerCase().includes(word))) {
      message.reply('**¡Hola compañero!** :wave:');
      message.channel.send('Para subir archivos a tu servidor ve a : `Settings > SFTP` copia tus credenciales y colocalas en el programa FTP.');
      message.channel.send('Te recomendamos usar **FileZilla** puedes obtener el link usando `-fz`')
    }

    const supEs = ['ayuda', 'ayudan'];
    if(message.content.startsWith(client.prefix)) return;
    if(supEs.some(word => message.content.toLowerCase().includes(word))) {      
      message.react('👋')
      message.channel.send(`:wave: ¡Hola y bienvenido al **Servidor Oficial de Skynet Host** ${message.author} ! Estamos contentos de tenerte aquí, pero necesitaremos mas información para poder ayudarte. \n\n¿Cuál es el problema? ¿Que debería de pasar? ¿Que errores salen en la consola? \n\n Puedes pegar tus logs en esta pagina web: https://mclo.gs`);
    }
  }
}