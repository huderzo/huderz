const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const bot = new Client({
  disableEveryone: true
})
const prefix = "/h."
const token = "SUPER-SECRET-TOKEN"
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hi!\n'+
  'this is the official web of Huder!\n'+
  `here all Huder's commands.\n`+
  ` \n`+
  `FUN:\n`+
  ` \n`+
  `/h.triggered, make a triggered gif with an avatar.\n`+
  `/h.rainbow, rainbow on an avatar.\n`+
  `/h.blur, blur an avatar.\n`+
  `/h.wasted, an user was wasted.\n`+
  `/h.pixel, pixelate an avatar.\n`+
  `/h.invert, invert the colours from an avatar.\n`+
  `/h.grey, make an avatar grey.\n`+
  ` \n`+
  `UTILS: \n`+
  ` \n`+
  `/h.invite, invite Huder to ur server.\n`+
  ` \n`+
  ` \n`+
  `if you want invite huder: https://bit.ly/3pFAm4g \n`+
  ` \n`+
  ` \n`+
  `Copyright (c) 2021 huderzo - https://github.com/huderzo`);
});
server.listen(3000);
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
})
bot.on('ready', () => {
   console.log(bot.user.tag);

bot.user.setPresence({
  activity: {
      name: `/h.help`,
      type: "LISTENING"
  },
  status: "online"
});
});
bot.on('message', async message =>{
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
const command = bot.commands.get(cmd)
if (!command) command = bot.commands.get(bot.aliases.get(cmd))
if (command) command.run(bot, message, args)
if (message.author.bot) return;
if (!message.guild) return;
if (!message.member) message.member = await message.guild.fetchMember(message)
if (!message.content.startsWith(prefix)) return;
if (cmd.length == 0 ) return;

})
bot.login(token)
