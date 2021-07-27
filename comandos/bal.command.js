module.exports = {
name:"saldo",

desc: "Veja o saldo de alguem!",
cat:"ec",
aliases:["bal","balance","atm","banco","dinheiro", "money"],
manu:true,
run:run
}
async function run(client,message,args){
    const db = require("../db")
      let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; 
      db.ref(`cache/${user.id}`).once("value").then(membr=>{
        let membro = membr.val()
        if(!membro) {
            db.ref(`cache/${user.id}`).update(user)
            return message.reply("Primeira vez que te vejo use o comando novamente para eu poder te conhecer")
        }
        message.reply("Parece mentira e é kkk(to fazendo o cmd ainda)")
       db.ref(`perfil/${message.user.id}/economia/status`).
      })
      
    
}