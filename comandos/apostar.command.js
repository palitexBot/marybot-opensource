module.exports = {
name:"apostar",
desc: "aposte mcoins!",
cat:"ec",
manu:true,
aliases:["aposta"],
run:run
}
const D = require("discord.js")
//const db = require('../db')
async function run(client,message,args){
    const db = client.db
 let num1 = args[0]
db.ref(`guilds/${message.guild.id}`)
 if(!num1) return message.reply(`Use `)
}