const { MessageEmbed }= require("discord.js")
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
      let saldoOutroMembro = await db.getSaldo(user)
      let mensagem = "{member1}, {member} quer te pagar {mcoins} mcoins, se você aceitar clicando em Aceitar1 e o {member} clicar em Aceitar2 você ficará com {mcoins.totality} mcoins! e {member} com {member.mcoins} mcoins\nLEMBRANDO: o {member} e {member1} precisam pegar o daily(m.daily) pra pagar!\nLeia as regras em: https://mary.blacklight.net.br/terms"
      saldo=await db.getSaldo(message.author)
      for(let i = 0;i<=1000;i++){
        mensagem=mensagem.replace("{member1}",user)
        mensagem=mensagem.replace("{member}",message.author)
        mensagem=mensagem.replace("{mcoins}",valor)
        mensagem=mensagem.replace("{mcoins.totality}",saldoOutroMembro+valorr)
        mensagem=mensagem.replace("{member.mcoins}",saldo-valor)
      
      }
      message.reply({
        content:mensagem
      })
    }
    }
  }
  }
}
}

}