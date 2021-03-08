const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "rainbow",
   description: "rainbow on an avatar",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
  let url = args.join(" ")
  if(!url) return message.channel.send(`how to use "rainbow":\n`+
 `**/h.rainbow** <url> or **/h.rainbow** <@mention>`);
let supbro = message.mentions.users.first()
if (!supbro) {
  

        let image = await canvacord.Canvas.rainbow(url);
        let attachment = new Discord.MessageAttachment(image, "rainbow.jpg");
        return message.channel.send(attachment);

    } else {


        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.rainbow(avatar);
        let attachment = new Discord.MessageAttachment(image, "rainbow.jpg");
        return message.channel.send(attachment);
 
    }
          }

 }