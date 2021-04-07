module.exports = {
    name: 'changevc',
    description: 'changes voice channel name',
    execute(message,args){

        if(message.member.roles.cache.some(r => r.name === 'ad')){
            message.guild.channels.cache.get("776825148141207597").setName("Testing");
            message.channel.send('vc name changed');
        } else{
            message.channel.send('ui ui ui ui naan bunny-in kattalaiku mattum than adipadiven');
        } 
    }

}