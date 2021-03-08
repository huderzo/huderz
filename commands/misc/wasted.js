const canvacord = require("canvacord");
const Discord = require('discord.js')
 
 module.exports={
   name: "wasted",
   description: "an user was wasted",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args) => {

 let url = args.join(" ")
  if(!url) return message.channel.send(`how to use "wasted":\n`+
 `**/h.wasted** <url> or **/h.wasted** <@mention>`);     
let supbro = message.mentions.users.first()
if (!supbro) {


        let image = await canvacord.Canvas.wasted(url);
        let attachment = new Discord.MessageAttachment(image, "wasted.jpg");
        return message.channel.send(attachment);

    } else {
   

        let avatar = supbro.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        let image = await canvacord.Canvas.wasted(avatar);
        let attachment = new Discord.MessageAttachment(image, "wasted.jpg");
        return message.channel.send(attachment);

    }
          }
 }