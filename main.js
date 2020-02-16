// imports
const Discord = require('discord.js');
require('enve');

// create client
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready');
    // set presence
    client.user.setPresence({
        game: {
            name: process.enve.NAME
        },
        status: process.enve.STATUS
    })
});

// trigger on message
client.on('message', message => {
    checkMessage(message);
});

// login
client.login(process.enve.TOKEN);


function logMessage(message) {
    // check log level and log accordingly
    // loglevel 1 and above
    if ( process.enve.level >= 1 ) {
        console.log(`${message.createdAt} - Deleted message from ${message.author.username}`);
    }
    // loglevel 2
    if ( process.enve.level == 2 ) {
        console.log(`message - ${message.content}`);
    }
}

function checkMessage(message) {
    // check for message sent by author
    if (process.enve.USERS.includes(message.author.id)) {
        // delete message
        message.delete();
        // log message
        logMessage(message)
    }
}
