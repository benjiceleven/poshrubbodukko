const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '.Are you?') {
    	message.reply('I am.');
  	}
});

client.on('message', message => {
    if (message.content === '.Why?') {
    	message.reply('Who knows?');
  	}
});

client.on('message', message => {
    if (message.content === '.commands') {
    	message.reply('Commands: .Are you? .ping .Why? .yt .twitch .creator');
  	}
});

client.on('message', message => {
    if (message.content === '.yt') {
    	message.reply('My Youtube: https://www.youtube.com/channel/UC7fHF0SUMGd9x32odZ9hv_A?view_as=subscriber');
  	}
});

client.on('message', message => {
    if (message.content === '.twitch?') {
    	message.reply('My Twitch: https://www.twitch.tv/C_011');
  	}
});

client.on('message', message => {
    if (message.content === '.creator') {
    	message.reply('Benji Celeven, the most bestest of frens!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
