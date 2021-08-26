
module.exports = {
  name:"perfil",
  description:"veja as informações de alguém!",
  aliases:["atm","bal","mcoins","banco","balance","conta"],
  run:run
}
async function run(client,message,args){
   const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  let info = db.perfilMember(user);
  if(!info) return message.reply("Perfil não existe")
}