const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('node-superfetch');
const yuricanvas = require("yuri-canvas");
const huderlog = ('NzEzODM3NjU2MjMyMTY1Mzc3.Xsl7Hw.6wGqM2QWlwuizM57Aom89ntjuqI');

client.on('ready', () => {
   console.log(client.user.tag);

client.user.setPresence({
  activity: {
      name: `/h.`,
      type: "LISTENING"
  },
  status: "online"
});
});


const prefix = '/h.';

client.on('message', async (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  
  if(command === 'help') {
    message.channel.startTyping()
    message.reply('check ur dm! :mailbox_with_mail: ')
    message.channel.stopTyping()
    const helpcmd = new Discord.MessageEmbed() 
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("```All Huder's commands.```")
    .setFooter("Use /h.<any command>", client.user.avatarURL())
    //command list
    .addField("**blur**", "Blurs an avatar.")
     .addField("**pixel**", "Pixels an avatar.")
      .addField("**fade**", "Fades an avatar.")
       .addField("**invert**", "Inverts an avatar.")
        .addField("**rainbow**", "Rainbow an avatar.")
         .addField("**grey**", "Make an avatar gray.")
          .addField("**trump**", "Now it's law.")

message.author.send({ embed: helpcmd });
  }
  

  if (message.content === "!trigger") {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await yuricanvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
}

});

client.login(huderlog);