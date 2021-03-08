const red = require('reddit-fetch')
const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
 
 module.exports={
   name: "redditmeme",
   description: "search a memes in reddit",
   usage: "[ user mention or not ]",
   category: "misc",
   run: async(bot,message,args)=>{
 
red({ 
 subreddit: 'dankmemes',
 sort: 'hot',
 allowNSFW: false,
 allowModPost: false,
 allowCrossPost: false,
 allowVideo: false
}).then(post => {
 const embed = new MessageEmbed()
 .setColor("RANDOM")
 .setAuthor("r/dankmemes", "https://styles.redditmedia.com/t5_2zmfe/styles/communityIcon_swbdwm8fxdb61.jpg?width=256&format=pjpg&s=e53d39b2ab0c6e090bfb84eb3f631c5bb4b404ae")
 .setTitle(post.title)
 .setURL(post.url)
 .setImage(post.url)
 .setFooter('reddit.com', "https://cdn.discordapp.com/attachments/792604977201152022/805833470198022174/reddit-logo-16.png")
 if(!post.url){
 return message.channel.send("I didn't find anything")
 } else {
 message.channel.send({ embed: embed})
}
}).catch(() => message.channel.send("unknown error"))
   }
 }