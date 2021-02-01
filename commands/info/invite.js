const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "invite",
   description: "invite huder to ur server",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{
 
 let invite = new Discord.MessageEmbed()
 .setTitle(':arrow_right:   Invite')
 .setFooter('Click on blue text.')
 .setColor('RANDOM')
 .setURL('https://discord.com/oauth2/authorize?client_id=713837656232165377&scope=bot&permissions=1077275977')
 message.reply({ embed : invite })
}
 }