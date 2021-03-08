const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "invert",
   description: "invert an avatar",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args) => {

 let url = args.join(" ")
  if(!url) return message.channel.send(`how to use "invert":\n`+
 `**/h.invert** <url> or **/h.invert** <@mention>`);
              let supbro = message.mentions.users.first()
if (!supbro) {
    
        let image = await canvacord.Canvas.invert(url);
        let attachment = new Discord.MessageAttachment(image, "invert.jpg");
        return message.channel.send(attachment);

    } else {
  
        let avatar = supp.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.invert(avatar);
        let attachment = new Discord.MessageAttachment(image, "invert.jpg");
        return message.channel.send(attachment);
   
    }
          }

 }