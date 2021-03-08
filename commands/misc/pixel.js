const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "pixel",
   description: "pixelate an avatar",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args) => {

 let url = args.join(" ")
  if(!url) return message.channel.send(`how to use "pixel":\n`+
 `**/h.pixel** <url> or **/h.pixel** <@mention>`);
           let supbro = message.mentions.users.first()
if (!supbro) {


        let image = await canvacord.Canvas.pixelate(url);
        let attachment = new Discord.MessageAttachment(image, "pixel.jpg");
        return message.channel.send(attachment);
      message.channel.stopTyping()      
    } else {

 

        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.pixel(avatar);
        let attachment = new Discord.MessageAttachment(image, "pixel.jpg");
        return message.channel.send(attachment);

    }
      }
 }

