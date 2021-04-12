module.exports = {
    name:'url_redirects',
    description : 'Redirects every url except gif and ignores some channels',
    execute(message){
      var flag = 0;
        function urlify(text) {
            url_return = '';
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            var url_find =  text.replace(urlRegex, function(url) {
              url_return += url;
            })
            if(url_return.startsWith("https://")) {
              flag = 1;
            }
            return url_return;
        }
          
        var text = message.content;
        var html = urlify(text);
        if(flag){
          const url = new URL(html);
      
          if( (message.channel.id != 781185462604660747) && (message.channel.id != 827069121022656512) && (message.channel.id != 829029538201468994) && (message.channel.id != 828946071760666665) && url.hostname != 'tenor.com' && html.startsWith("https://") && !message.author.bot){
              
              message.guild.channels.cache.get("828946071760666665").send("__URL redirected__ "+message.author.username +" posted  :  " + message.content+" in <#"+message.channel.id+">");
              
              return;
          }
        }
    }

}