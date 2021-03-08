const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "brightness",
   description: "make a triggered gif with an avatar.",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{

const url = args.join(" ")

  if(!args[0]) return message.channel.send(`how to use "brightness":\n`+
 `**/h.brightness** <@mention> or **/h.brightness** <url>`);

  let supbro = message.mentions.users.first()
if (!supbro) {

            let image = await canvacord.Canvas.brightness(url, 50);
        let attachment = new Discord.MessageAttachment(image, "brightness.png");

        return message.channel.send(attachment);

    } else {
  


        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.brightness(avatar, 50);
        let attachment = new Discord.MessageAttachment(image, "brightness.png");
        return message.channel.send(attachment);

    }
   }
 }