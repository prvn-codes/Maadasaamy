module.exports = {
    name: 'ping',
    description: 'Ping command to check bot status',
    execute(message,args){
      message.channel.send('pong');
    }
}
