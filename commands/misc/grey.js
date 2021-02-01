const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "grey",
   description: "make an avatar grey",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
let supbro = message.mentions.users.first()
if (!supbro) {
 

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.greyscale(avatar);
        let attachment = new Discord.MessageAttachment(image, "greyscale.jpg");
        return message.channel.send(attachment);
  
    } else {


        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.greyscale(avatar);
        let attachment = new Discord.MessageAttachment(image, "greyscale.jpg");
        return message.channel.send(attachment);
 
    }
          }

 }