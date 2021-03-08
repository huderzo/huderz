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

    const helpcmd2 = new MessageEmbed() 
    .setTitle('‎‎‎‎‎‎‎‎‎‎                        ‎<:huder:818269360959258664>')
    .setAuthor(bot.user.username, bot.user.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("```utils or simples.```")
    .setImage('https://cdn.discordapp.com/attachments/763773539727441931/806232961128202251/Screenshot_72.png')
    //command list
    .addField("**invite**", "Invite Huder to ur server.")
    .addField("**help**", "You are using this command")
    .addField("**avatar**", "Show a avatar.")
    .addField("**ima**", "Search random images")
    .addField("**report**", "Report some issues.")

message.author.send({ embed: helpcmd2 });


    const helpcmd = new MessageEmbed() 
    .setColor("RANDOM")
    .setDescription("```fun or images.```")
    .setImage('https://cdn.discordapp.com/attachments/763773539727441931/806232961128202251/Screenshot_72.png')
    //command list
    .addField("**blur**", "Blurs an avatar.")
    .addField("**pixel**", "Pixelate an avatar.")
    .addField("**wasted**", "An user was wasted.")
    .addField("**joke**", "A lot of bad jokes.")
    .addField("**say**", "Make a user say what you want")
    .addField("**invert**", "Inverts an avatar.")
    .addField("**rainbow**", "Rainbow on an avatar.")
    .addField("**grey**", "Make an avatar grey.")
    .addField("**brightness**", "Make an avatar soo brightness.")
    .addField("**triggered**", "Make a gif with an avatar.")
    .addField("**redditmeme**", "Search a meme in reddit.")
 message.author.send({ embed: helpcmd });

     
  }
 }