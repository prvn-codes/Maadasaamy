module.exports = {
    name: 'ccn',
    description: 'changes channel names',
    execute(message,args){
      message.guild.channels.cache.get(args[0]).setName(args[1]);
      message.channel.send('channel  name changed to <#'+args[0]+'> successfully');
    }

}