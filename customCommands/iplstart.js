module.exports = {
    name: 'iplstart',
    description: 'changes voice channel name for ipl season',
    execute(message,args){

        var match = ['MI vs. RCB',
        'CSK vs. DC',
        'SRH vs. KKR',
        'RR vs PBKS',
        'KKR vs. MI',
        'SRH vs. RCB',
        'RR vs. DC',
        'PBKS vs. CSK',
        'MI vs. SRH',
        'RCB vs. KKR',
        'DC vs. PBKS',
        'CSK vs. RR',
        'DC vs. MI',
        'PBKS vs. SRH',
        'KKR vs. CSK',
        'RCB vs. RR',
        'PBKS vs MI',
        'RR vs. KKR',
        'CSK vs. RCB',
        'SRH vs. DC',
        'PBKS vs. KKR',
        'DC vs. RCB',
        'CSK vs SRH',
        'MI vs. RR',
        'DC vs. KKR',
        'PBKS vs. RCB',
        'MI vs. CSK',
        'RR vs. SRH',
        'PBKS vs. DC',
        'KKR vs. RCB'];
        
        for(let i = 0 ; i< 100000*match.length; i++){
            if(i%100000 == 0){
                if(message.member.roles.cache.some(r => r.name === 'ad')){
                    message.guild.channels.cache.get("776825148141207597").setName(match[i/100000]);
                    message.channel.send(match[i/100000]);
                } else{
                    message.channel.send('you don\'t have permission');
                }
            }
        }
    }

}