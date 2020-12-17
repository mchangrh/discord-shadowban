// imports
const Discord = require('discord.js')
require('dotenv').config()
require('enve')

const client = new Discord.Client()
client.on('ready', () => {
  console.log('Ready')
  client.user.setPresence({ // set presence
    game: {
      name: process.enve.NAME
    },
    status: process.enve.STATUS
  })
})
client.on('message', message => { // trigger on message
  checkMessage(message)
})
client.login(process.enve.TOKEN)

function logMessage (message) {
  if (process.enve.LOGLEVEL >= 1) {
    console.log(`${message.createdAt} - Deleted message from ${message.author.username}`)
  }
  if (process.enve.LOGLEVEL === 2) {
    console.log(`message: \`${message.content}\``)
  }
}

function checkMessage (message) {
  // check for message sent by author
  if (process.enve.USERS.includes(message.author.id)) {
    message.delete() // delete message
    logMessage(message) // log message
  }
}
