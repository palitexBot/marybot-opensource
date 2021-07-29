module.exports = {
name:"saldo",

desc: "Veja o saldo de alguem!",
cat:"ec",
aliases:["bal","balance","atm","banco","dinheiro", "money"],
manu:true, // true se quiser deixar bloqueado o cmd, false se quiser liberar
run:run
}
const db = require("../db")
const Discord = require('discord.js')
async function run(client,message,args){
    const db = require("../db")
      let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; 
      db.ref(`cache/${user.id}`).once("value").then(membr=>{
        let membro = membr.val()
        if(!membro) {
            db.ref(`cache/${user.id}`).update(user)
            return message.reply("Primeira vez que te vejo use o comando novamente para eu poder te conhecer")
        }
      // message.reply("Parece mentira e é kkk(to fazendo o cmd ainda)")
       db.ref(`perfil/${user.id}/economia`).once("value").then(async lol=>{
           if(!lol.val()) return message.reply(`<:maryconfig:830541627566063668> Peça pra ${user} falar alguma coisa, eu ainda não conheco ele!`);
            let api = {
                bitmarys: lol.val().bitmarys,
                saldo: lol.val().saldo
            }
           // console.dir(api)
           
           message.reply("carregando bal...").then(m=>{
             setTimeout(()=>{
            let embed = new Discord.MessageEmbed()
            .setColor("00ff32")
            .setAuthor(`Saldo de ${user.tag}!`, user.avatarURL())
            .setFooter(`comando utilizado pelo ${message.author.tag}`, message.author.avatarURL())
            .setTimestamp()
            .addFields(
                {name:"Mcoins", value:api.saldo},
                {name:"BitMarys",value:api.bitmarys},
                {name:"BitMarys em mcoins:",value:api.bitmarys*10000000}
            )
            m.edit("",embed)// DEIXA 100 MSM)
           })

       })      })
      
    
})
}// fim