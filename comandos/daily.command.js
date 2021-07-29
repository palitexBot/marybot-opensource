const disbut = require('discord-buttons')
module.exports = {
name:"daily",
desc: "pegue os seus mcoins diarios!",
cat:"ec",
manu:false,
aliases:[],
run:run
}
async function run(client,message,args){
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/daily') .setLabel('Daily!'); 

  let row = new disbut.MessageActionRow()
  .addComponents(button1);

  message.channel.send("<a:marymoney:869723446353997874> Pegue seus mcoins diarios, NÃO USE OUTRAS CONTAS PARA CONSEGUIR MAIS MCOINS, CASO USE IRA TOMAR UM MARYBAN (ou seja não poder usar nenhum comando da mary)", row)
}