const Discord = require ('discord.js')
const db = require('../db')
module.exports = {
name:"sobremim",
desc: "Mude seus sobre mim",
cat:"info",
manu:false,
aliases:["aboutme"],
run:run
}
async function run(client,message,args){
 db.ref(`/perfil/${message.author.id}/info`).update({sobremim: args.join(' ')}).then(() =>{     
  message.reply("Seu sobre mim foi alterado!")
})
}