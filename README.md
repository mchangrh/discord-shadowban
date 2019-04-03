# discord-shadowban

Why ban your users when you can instead shadowban them?

Delete any and all messages after they're sent, all powered by discord.js

dependencies: (discord.js)[discord.js.org]

## Invite link:
https://discordapp.com/api/oauth2/authorize?client_id=`client id`&permissions=73728&scope=bot

Permissions:
Manage Messages and Read Message History

## Config: 
 `name:` Name the bot whatever you want
 `users:` IDs of users you want to shadowban
 `status:` status of bot - `online`, `idle`, `invisible`, `dnd`
 `loglevel`: 0 - no output except ready, 1 - logs the time and author of message, 2 - logs the time, author and content of message.
 `token`: your super secret token from (discord)[https://discordapp.com/developers/applications/]
