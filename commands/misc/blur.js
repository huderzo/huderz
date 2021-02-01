const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "blur",
   description: "blur an image",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
  let supbro = message.mentions.users.first()
if (!supbro) {


 

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.blur(avatar);
        let attachment = new Discord.MessageAttachment(image, "blur.jpg");
        return message.channel.send(attachment);

    } else {
 

        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.blur(avatar);
        let attachment = new Discord.MessageAttachment(image, "blur.jpg");
        return message.channel.send(attachment);


    }
      }
 }