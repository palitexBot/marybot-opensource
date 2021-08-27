const Discord = require("discord.js")
module.exports = {
name:"daily",
desc: "pegue os seus mcoins diarios!",
cat:"ec",
manu:false,
aliases:[],
run:run
}
async function run(client,message,args){
  const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Daily')
    .setDescription("<a:marymoney:869723446353997874> Pegue seus mcoins diarios, NÃO USE OUTRAS CONTAS PARA CONSEGUIR MAIS MCOINS, CASO USE IRA TOMAR UM MARYBAN (ou seja não poder usar nenhum comando da mary)")
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
  

  message.channel.send({embeds:[embed]});
}