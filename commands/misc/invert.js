const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "invert",
   description: "invert an avatar",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args) => {

              let supbro = message.mentions.users.first()
if (!supbro) {
    
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.invert(avatar);
        let attachment = new Discord.MessageAttachment(image, "invert.jpg");
        return message.channel.send(attachment);

    } else {
  
        let avatar = supp.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.invert(avatar);
        let attachment = new Discord.MessageAttachment(image, "invert.jpg");
        return message.channel.send(attachment);
   
    }
          }

 }