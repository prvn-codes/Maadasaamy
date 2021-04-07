module.exports = {
    name: 'ping',
    description: 'Ping command to check bot status',
    execute(message,args){
        if(message.member.roles.cache.some(r => r.name === 'ad')){
            message.channel.send('pong');
        } else{
            message.channel.send('ui ui ui ui naan bunny-in kattalaiku mattum than adipadiven');
        } 
    }
}
