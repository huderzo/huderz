const canvacord = require("canvacord");
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
 module.exports={
   name: "help",
   description: "help command",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{
 
    message.reply('check ur dm! :mailbox_with_mail: ')
    const helpcmd = new MessageEmbed() 
    .setAuthor(bot.user.username, bot.user.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("```All Huder's commands.```")
    .setFooter("https://huderz.huderzone.repl.co", bot.user.avatarURL())
    //command list
    .addField("**blur**", "Blurs an avatar.")
     .addField("**pixel**", "Pixelate an avatar.")
      .addField("**wasted**", "An user was wasted.")
       .addField("**invert**", "Inverts an avatar.")
        .addField("**rainbow**", "Rainbow on an avatar.")
         .addField("**grey**", "Make an avatar gray.")
          .addField("**triggered**", "Make a gif with an avatar.")

message.author.send({ embed: helpcmd });
     
  }
 }