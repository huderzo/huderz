const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const bot = new Client({ ws: { properties: { $browser: "Discord Android" }}})
const prefix = "/h."
const token = "SECRET-TOKEN"
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hi!\n'+
  'this is the official web of Huder!\n'+
  `Huder is a bot focused exclusively on commands of fun, simplicity and chill aesthetics, developed by エルヴィラの嘘#6141.\n`+
  `here all Huder's commands.\n`+
  ` \n`+
  `FUN:\n`+
  ` \n`+
  `/h.triggered,    make a triggered gif with an avatar.\n`+
  `/h.rainbow,      rainbow on an avatar.\n`+
  `/h.blur,         blur an avatar.\n`+
  `/h.wasted,       an user was wasted.\n`+
  `/h.pixel,        pixelate an avatar.\n`+
  `/h.invert,       invert the colours from an avatar.\n`+
  `/h.grey,         make an avatar grey.\n`+
  `/h.redditmeme,   search a meme in reddit. \n`+
  `/h.say,          make a user say what you want.\n`+
  `/h.joke,         a lot of bad jokes.\n`+
  ` \n`+
  `UTILS: \n`+
  ` \n`+
  `/h.invite,       invite Huder to ur server.\n`+
  `/h.avatar,       show a avatar. \n`+
  `/h.report,       report some issues. \n`+
  ` \n`+
  ` \n`+
  `all npm used: \n`+
  `canvacord \n`+
  `canvas \n`+
  `request \n`+
  `reddit-fetch \n`+
  `cheerio \n`+
  `http \n`+
  `file-type \n`+
  `ascii-table \n`+
  `server \n`+
  `discord.js \n`+
  `node-superfetch \n`+
  `discord-jokes \n`+
  ` \n`+
  ` \n`+
  `if you want invite huder: https://bit.ly/3pFAm4g \n`+
  ` \n`+
  ` \n`+
  `Copyright © 2021 huderzo - https://github.com/huderzo`);
});
server.listen(30000);
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
})
bot.on('ready', () => {
   console.log(bot.user.tag);
const array = [
  {
    name: `/h.`,
    type: `PLAYING`
  },
  {
    name: `/h.help`,
    type: `WATCHING` 
  }
]

    setInterval(() => {
        function presence() {
            bot.user.setPresence({
              status: 'online', 
                activity: array[Math.floor(Math.random() * array.length)], 
            });
        }

        
        presence();
    }, 10000);
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