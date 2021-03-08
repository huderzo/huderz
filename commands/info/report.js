const canvacord = require("canvacord");
const Discord = require('discord.js')
 module.exports={
   name: "report", //yes it's a simple command, i know
   description: "help command",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{
     let channel = bot.channels.cache.get('818267793816027166'); 
     let report = args.join(" ")
     if(!report) return; message.reply('thanks for report!')
     channel.send("```\n"+ report +'``` by '+ message.author.tag)
   }
 }
