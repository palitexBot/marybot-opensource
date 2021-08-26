
module.exports = {
  name:"saldo",
  description:"Comando de saldo teste",
  aliases:["atm","bal","mcoins","banco","balance","conta"],
  run:run
}
async function run(client,message,args){
  
  const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  const a = await db.getSaldo(user);
  if(!a){
    message.reply(`Peça pra ${user} usar um comando meu ou me mencionar para  ele ter uma conta... Ele tem 0! `)
  } else{
    const emojo = client.emojis.cache.get("869723446353997874")
    if(user.id == message.author.id){
      message.lol = `${emojo}|${message.author} você tem ${a} mcoins!`
    } else{
      message.lol=`${emojo}| ${message.author} ${user} tem ${a} mcoins!`
    }
    message.reply(message.lol)
  }

}