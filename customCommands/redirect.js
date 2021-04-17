module.exports = {
  name: 'redirect',
  description: 'redirects to mentioned channel .redirect <message id> to <channel id>',
  execute(message, args) {
    function takesTime() {
      return new Promise((res, rej) => {
        const redirect = message.channel.messages.fetch(args[0]);
        res(redirect);
      });
    }

    takesTime().then(redirect => {
      message.guild.channels.cache.get(args[2]).send('Redirected from <#' + message.channel.id + '> : ' + redirect.content);
    });
  }
}