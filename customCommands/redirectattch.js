const {MessageAttachment} = require('discord.js');
module.exports = {
    name: 'redirectattch',
    description: 'redirects to mentioned channel .redirectattch <message id> to <channel id>',
    execute(message,args){
      function takesTime() { return new Promise((res, rej) => {
        const ImageLink = '';
        const redirect = message.channel.messages.fetch(args[0]);
	      //ImageLink = redirect.attachments.proxyURL;
        res(ImageLink);
        });
      }
      
      takesTime().then(ImageLink => {
        const channel = message.guild.channels.cache.get(args[2]);
        channel.send('Redirected from <#'+args[2]+'> :'+ ImageLink);
      });
    }
}