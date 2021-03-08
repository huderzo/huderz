const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "blur",
   description: "blur an image",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
 let url = args.join(" ")
 if(!url) return message.channel.send(`how to use "blur":\n`+
 `**/h.blur** <url> or **/h.blur** <@mention>`);
  let supbro = message.mentions.users.first()
if (!supbro) {


 
        let image = await canvacord.Canvas.blur(url);
        let attachment = new Discord.MessageAttachment(image, "blur.jpg");
        return message.channel.send(attachment);

    } else {
 

        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.blur(avatar);
        let attachment = new Discord.MessageAttachment(image, "blur.jpg");
        return message.channel.send(attachment);


    }
      }
 }