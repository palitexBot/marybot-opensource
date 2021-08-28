const {MessageEmbed}= require("discord.js")
module.exports = {
  name:"pay",
  description:"Pague seu melhor amigo com mcoins!",
  aliases:["pagar","pix","payall"],
  run:run
}
async function run(client,message,args,erro){
  const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]);
  const user1 = message.author;
  const valor = args[1]
  const valorr = Number(valor);

  if(!user) {
  erro("membro invalido")
  } else{ 
if(user.id != client.user.id && user.bot) {
  erro("hmmmmmm aldeao foda?\n apenas ME pague, pros outros bots não intendeu?")
}else{
  if(!valor) {
    erro("Valor que quer pagar inexistente, faça como esse exemplo:\nm.pay <@user> <valor>")
  }else{
  if(isNaN(valorr)) {
erro("O valor que tu quer tem que ser numero!")
  } else{
    if(user.id == user1.id) {
      erro("você não pode te pagar, bobinho!!")
    } else{
    let saldo = await db.getSaldo(message.author)
    if(valor>=saldo){
      erro("você não pode pagar oque não tem bobinho!!")
    } else{
      
    }
    }
  }
  }
}
}

}