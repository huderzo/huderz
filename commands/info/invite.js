const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "invite",
   description: "invite huder to ur server",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{
 
 let invite = new Discord.MessageEmbed()
 .setTitle('‎‎‎‎‎‎‎‎‎‎                        ‎<:huder:818269360959258664>')
 .setFooter('Click on my icon in the message.')
 .setColor('RANDOM')
 .setImage('https://cdn.discordapp.com/attachments/763773539727441931/806232961128202251/Screenshot_72.png')
 .setURL('https://discord.com/oauth2/authorize?client_id=713837656232165377&scope=bot&permissions=1077275977')
 message.reply({ embed : invite })
}
 }