const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./customCommands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require( `./customCommands/${file}`);
    client.commands.set(command.name, command);
}



client.once('ready', ()=> {
    console.log('Maadasaamy is online');
});

const keepAlive = require('./server.js');
keepAlive();

client.on("ready", () => {
    client.user.setActivity("Coded by Bunny°#0128", { type: "PLAYING", url: 'https://www.discordapp.com/users/586862321922605076'})
});

client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.commands.get('ping').execute(message,args);
    }else if(command == 'changevc'){
        client.commands.get('changevc').execute(message,args);
    }else if(command == 'iplstart'){
        client.commands.get('iplstart').execute(message,args);
    }


});















client.login('ODI5Mjc0MjY0Njc3OTA4NTMw.YG1v1w.gjL570f5ckOl0QdHhL9rckKDSIA');