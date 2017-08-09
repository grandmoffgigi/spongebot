const Discord = require('discord.js');
const client = new Discord.Client();

// Say its online.
client.on('ready', () => {
    console.log('The bot is online!');
});

//command for !sponge
client.on('message', message => {
    if(message.content === ';sponge') {
	    message.channel.sendMessage('```hai sponge```');
	}
});

//command for !help
client.on('message', message => {
if(message.content === ';help') {
message.channel.sendMessage('Sup me fellow sponge. Prefix is ; If you want to get most complete and up-to-date information visit the sponge discord at https://discord.gg/qXx6acQ . Commands are: ;discord ;meetingspots ;raidinfo (might be outdated) ;emergency (emergency help people) More shit coming');
}
});

//check for token
client.login('MzI3MTYzMTI1MTcyNTM1Mjk2.DFA7yw.jo83EgA0FpOEaa-U1XY0hncU_rQ');﻿