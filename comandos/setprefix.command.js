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
    let p ="m."
 if(!args[0]) return message.reply("use sp <prefix ou reset>")
if(args[0] == "reset")args[0]=p 
if(args[0] != p)p=args[0]
message.channel.send("<a:C0deloading:798332658060623872> Conecting in db... isso pode levar alguns segundos...").then(m =>{
    setTimeout(()=>{
db.ref(`guilds/${message.guild.id}`).update({prefix: args[0]}).then(() =>{
setTimeout(()=>{
       if(p==="{mary.defaults.prefix}")  p ="m."
m.edit(`Editing guilds.${message.guild.id}.prefix for ${p}`).then(()=>
{
setTimeout(()=>{
m.edit(`:thumbsup:Prontinho!  Agora o meu prefixo agora é ${p}`)
},200)
})

},500)
})

    },2030)
})




}