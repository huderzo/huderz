const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "grey",
   description: "make an avatar grey",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
 let url = args.join(" ")
  if(!url) return message.channel.send(`how to use "grey":\n`+
 `**/h.grey** <url> or **/h.grey** <@mention>`);
let supbro = message.mentions.users.first()
if (!supbro) {
 


        let image = await canvacord.Canvas.greyscale(url);
        let attachment = new Discord.MessageAttachment(image, "greyscale.jpg");
        return message.channel.send(attachment);
  
    } else {


        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.greyscale(avatar);
        let attachment = new Discord.MessageAttachment(image, "greyscale.jpg");
        return message.channel.send(attachment);
 
    }
          }

 }