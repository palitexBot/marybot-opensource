const disbut = require('discord-buttons')
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
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/daily') .setLabel('Daily!'); 

  let row = new disbut.MessageActionRow()
  .addComponents(button1);

  message.channel.send(embed, row)
}