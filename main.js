
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');
const { url } = require('inspector');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./customCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./customCommands/${file}`);
  client.commands.set(command.name, command);
}



client.once('ready', () => {
  console.log('Maadasaamy is online');
});

const keepAlive = require('./server.js');
keepAlive();

client.on("ready", () => {
  client.user.setActivity("Coded by Bunny°#0128", { type: "PLAYING", url: 'https://www.discordapp.com/users/586862321922605076' })
});

client.on("message", message => {
  if(!message.author.bot){
    console.log("checking for url");
    client.commands.get('url_redirects').execute(message);
  }
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);

  const command = args.shift().toLowerCase();
  if(message.author.id == 586862321922605076 ){
    if (command == 'ping') {
      console.log('calling ping');
      message.channel.send(`**Pong 🏓** \nLatency : ${Date.now() - message.createdTimestamp}ms \nAPI Latency : ${Math.round(client.ws.ping)}ms`);
    } else if (command == 'ccn') {
      console.log('calling ccn');
      client.commands.get('ccn').execute(message, args);
    } else if (command == 'iplstart') {
      console.log('calling iplstart');
      client.commands.get('iplstart').execute(message, args);
    } else if (command == 'redirect') {
      console.log('calling redirect');
      client.commands.get('redirect').execute(message, args);
    } /*else if (command == 'redirectattch') {
      console.log('calling redirectattch');
      client.commands.get('redirectattch').execute(message, args);
    }*/
  }else {
    message.channel.send('Access denied');
    return;
  }

});















client.login('');