const disbut = require("discord-buttons")
module.exports = {
name:"ajuda",
desc: "Comando que vai redirecionar para esse site!",
cat:"mod",
manu:false,
aliases:["help","aj","?","mary.commands"],
run:run
}
async function run(client,message,args){
  const discord = require('discord.js')
  const disbut = require('discord-buttons')

        let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/comandos.mcat') 
  .setLabel('Comandos🤖'); 
  let button2 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br') 
  .setLabel('Meu site!'); 

  let button3 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/vote') 
  .setLabel('Vote em mim✔'); 
let button4 = new disbut.MessageButton()
  .setStyle('url')// eu sei
  //o style é oq ele é, n tem id
  .setURL('https://mary.blacklight.net.br/api/suporte') 
  .setLabel('Suporte❓'); 
 
let row = new disbut.MessageActionRow()
  .addComponents(button1, button2, button3 ,button4);


message.channel.send('Devido as limitaçôes do Discord decidimos mover o ajuda para o site,  ', row);
}