const giveMeAJoke = require('discord-jokes');
const canvacord = require("canvacord");
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
 module.exports={
   name: "joke",
   description: "dad jokes",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 

        giveMeAJoke.getRandomDadJoke (function(joke) {
          
    const jokeE = new MessageEmbed() 
    .setDescription('```xl\n'+ joke +'```')
    .setColor('RANDOM')
    .setFooter('© devmitza')
      message.channel.send({embed : jokeE});
    
    })

   }
 }