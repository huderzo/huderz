const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "pixel",
   description: "pixelate an avatar",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args) => {

           let supbro = message.mentions.users.first()
if (!supbro) {


        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.pixelate(avatar);
        let attachment = new Discord.MessageAttachment(image, "pixel.jpg");
        return message.channel.send(attachment);
      message.channel.stopTyping()      
    } else {

 

        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.pixel(avatar);
        let attachment = new Discord.MessageAttachment(image, "pixel.jpg");
        return message.channel.send(attachment);

    }
      }
 }

