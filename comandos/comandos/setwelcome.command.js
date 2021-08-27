const discord = require ('discord.js')
module.exports = {
name:"setwelcome",
desc: "Sete o canal que eu irei dar boas vindas",
cat:"mod",
manu:false,
aliases:["sw","welcome"],
run:run
}
async function run(client,message,args){
if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(`**${message.author.username}**, Você não pode setar o canal de welcome! Você precisa da permissão \`MANAGE_GUILD\`!`)
    }

     if(!args[0]) return message.reply("use sw #chat")
     message.reply(`sto sendo criado`)
}