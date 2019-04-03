// imports
const Discord = require('discord.js');
const config = require('./config.json');

// create client
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready');
	// set presence
	client.user.setPresence({game: {name: config.name}, status: config.status})
});

client.on('message', message => {
    // check for message sent by author
	if (config.users.indexOf(message.author.id) >=0) {
        // delete message
        message.delete();
        // loglevel 1
        if (config.loglevel >= 1) {
            console.log(`${message.createdAt} - Deleted message from ${message.author.username}`);
        }
        // loglevel 2
        if (config.loglevel >=2) {
            console.log(`message - ${message.content}`);
        }
    }
});

// login
client.login(config.token);