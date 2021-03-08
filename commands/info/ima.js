var cheerio = require("cheerio"); 
var request = require("request"); 
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
 module.exports={
   name: "ima",
   description: "u can search any images",
   usage: "[ only use ]",
   category: "info",
   run: async(bot,message,args)=>{

        if (!args[1]) return message.channel.send(`how to use "ima":\n`+
 `**/h.ima** . <search>, you can use other letters or symbols instead of "."`)
        image(message);
    },
    aliases: [],
    description: "Random images",
}

async function image(message){ 
    const args = message.content.split(" ");
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args.slice(1).join(" "),
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, async function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            return message.channel.send("I didn't find anything");
        }



        let i = 0;
        let max = urls.length - 1;
    const embed = new MessageEmbed() 
        .setFooter(`${i + 1}/${max + 1}`)
        .setImage(urls[i])
        .setColor("RANDOM")


        const filter = (reaction, user) => {
            return ['⬅️', '➡️', '⛔'].includes(reaction.emoji.name) && user.id === message.author.id;
        };


        let msg = await message.channel.send(embed);
        await msg.react('⬅️');
        await msg.react('➡️');
        await msg.react('⛔');

        let collector = msg.createReactionCollector(filter, { idle: 20000 })
        collector.on('collect', async (reaction, user) => {
            if (reaction.emoji.name === '➡️') {
                await reaction.users.remove(user.id);
                if (max !== i){
                    i++
                    embed.setImage(urls[i])
                    embed.setFooter(`${i + 1}/${max + 1}`)
                    await msg.edit(embed);
                }
            }
            if (reaction.emoji.name === '⬅️') {
                await reaction.users.remove(user.id);
                if (i !== 0) {
                    i--
                    embed.setImage(urls[i])
                    embed.setFooter(`${i + 1}/${max + 1}`)
                    await msg.edit(embed);
                }
            }
            if (reaction.emoji.name === '⛔') {
                collector.stop();
            }
        })
        collector.on('end', collected => msg.reactions.removeAll())

    });
};