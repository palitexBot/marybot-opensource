const Discord = require("discord.js")
const db = require('../db')
module.exports = {
name:"rep",
desc: "De uma reputação a alguem",
cat:"div",
manu:true,
aliases:["reputação"],
run:run
}
async function run(client,message,args){
message.reply("calma ae mane to fazendo")
}