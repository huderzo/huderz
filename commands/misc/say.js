
const Canvas = require("canvas");
const Discord = require('discord.js')
 
 module.exports={
   name: "say",
   description: "make a user say what you want",
   usage: "[ mention and args ]",
   category: "misc",
   run: async(bot,message,args) => {

const member = message.mentions.members.first()
if(!member) return message.channel.send("you need mention someone")
const messageuser = args.slice(1).join(" ")
if (!messageuser) return message.channel.send("u need say something")
const canvas = Canvas.createCanvas(400,69)
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#36393f"
ctx.fillRect(0,0,canvas.width, canvas.height)
const x=11,y=13, radius=20
ctx.save()
ctx.beginPath()
ctx.arc(x+radius, y+radius, radius, 0, Math.PI * 2, true)
ctx.closePath()
ctx.clip()
const url = member.user.displayAvatarURL({ format: 'png', dynamic: false, size: 1024})
const image = await Canvas.loadImage(url)
ctx.drawImage(image, x, y, radius * 2, radius *2)
ctx.restore()
ctx.lineWidth=.3
ctx.fillStyle = '#ffffff'
ctx.font = "14px Helvetica"
ctx.strokeText(member.nickname || member.user.username, 66, 27)
ctx.fillText(member.nickname || member.user.username, 66, 27)
let largo = ctx.measureText(member.nickname || member.user.username).width
ctx.font = "11.2px Sans Serif"
ctx.fillStyle= "#72767d"
let hour = Math.floor(Math.random() * 12)
let min  = Math.floor(Math.random() * 60)
const t = ["AM","PM"]
const tt= t[Math.floor(Math.random() * t.length)]
hour = (hour < 10 ? "0" : "") + hour
min = (min < 10 ? "0" : "") + min
ctx.fillText(`Today at ${hour}:${min} ${tt}`, 66 + largo + 8,27)
ctx.lineWidth=.1
ctx.font= "14.5px Whitney"
ctx.fillStyle = "#dcddde"
ctx.strokeStyle = "#dcddde"
let w = ctx.measureText(messageuser).width - Math.floor(ctx.measureText(messageuser).width*.08)
ctx.strokeText(messageuser, 66, 50, w)
ctx.fillText(messageuser, 66, 50, w)

const attach = new Discord.MessageAttachment(canvas.toBuffer(),'isay.png')
message.channel.send(attach)

   }
 }