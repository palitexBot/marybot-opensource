const db = require('../db')
module.exports = {
name:"setprefix",
desc: "Sete o prefixo da mary do seu server",
cat:"mod",
manu:false,
aliases:["sp","prefix","prefixo"],
run:run
}
async function run(client,message,args){
    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(`**${message.author.username}**, Você não pode colocar um prefixo diferente! Você precisa da permissão \`MANAGE_GUILD\`!`)
    }
if(!args[0]) return message.reply(`:-1: Use prefix <prefixo q vc quer>`)
if(args[0].length > 8) return message.reply(`Bote o limite de 8 letras no prefix!`)
     
message.channel.send("<a:C0deloading:798332658060623872> Conecting in db... isso pode levar alguns segundos...").then(m =>{
    setTimeout(()=>{
db.ref(`guilds/${message.guild.id}`).update({prefix: args[0]}).then(() =>{
setTimeout(()=>{
m.edit(`Editing guilds.${message.guild.id}.prefix for ${args[0]}`).then(()=>
{
setTimeout(()=>{
m.edit(`:thumbsup:Prontinho!  Agora o meu prefixo agora é ${args[0]}`)
},5000)
})

},319)
})

    },5930)
})




}