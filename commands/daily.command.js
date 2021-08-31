const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  name:"daily",
  description:"Pegue o seu premio diario!",
  aliases:["diario","dail"],
  run:run
}
async function run(client,message,args){

const {db} = client;

const aaa = await db.daily(message.author);
if(aaa){
  let a = new Date();
  let b = 24-a.getHours();
  let c = 60-a.getMinutes();
  let d = 60-a.getSeconds();
  if(b < 10)b = `0${b}`;
  if(c < 10)c = `0${c}`;
  if(d < 10)d = `0${d}`;
  
  message.lol =`Que pena, você já pegou seu daily hoje, espere mais ${b} horas,${c} minutos e ${d} segundos pra pegar o daily novamente!`;
} else{
  message.lol =`Oi ${message.author}, tu quer ganhar mcoins e ficar MaryKaaaaaa?\nEntre no site https://mary.blacklight.net.br/daily , faça login se pedir e clique em pegar mcoins e pronto!`
}
message.reply({content: `${message.lol}`})
}