const Discord = require("discord.js")

//api.token(process.env.api_oauth)
const db = require('../db')
const fetch = require('node-fetch')
module.exports = {
name:"gatos",
desc: "Gatinhos fofos :)",
cat:"div",
manu:false,
aliases:["gatinhos","gato"],
run:run
}
async function run(client,message,args){
const blapi = require('blacklightapi')
const api = new blapi()
  api.token(process.env.api_oauth)
let resultado = await api.gatos();
let url1 = await resultado

let url = resultado;
let embed = new Discord.MessageEmbed()
embed.setTitle("Own que gatos fofinhos :)")
embed.setFooter("By blacklight api!")
embed.setImage(url)
message.reply({
  embeds:[embed]

})
}