const canvacord = require("canvacord");
const Discord = require('discord.js')
 module.exports={
   name: "avatar",
   description: "show the avatar",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{

let mavatar = message.mentions.users.first() 
if (!mavatar) {
message.channel.send(message.author.displayAvatarURL({dynamic: true, size : 1024 }));

} else { 

message.channel.send(mavatar.displayAvatarURL({dynamic: true, size : 1024 }));

}
}
 }
 