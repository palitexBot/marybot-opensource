
const Discord = require("discord.js")
module.exports = {
name:"votar",
desc: "vote em mim",
cat:"info",
manu:false,
aliases:["topgg","vote","top.gg"],
run:run
}
async function run(client,message,args){
  const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Votar em mim')
    .setDescription('Ao votar em mim você me ajuda!')
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/vote') 
  .setLabel('Votar✔'); 

  let button2 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/invite') 
  .setLabel('Me adicione➕'); 

  let button3 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/topgg') 
  .setLabel('Top.gg📚'); 



let row = new disbut.MessageActionRow()
  .addComponents(button1, button2, button3);

  message.channel.send(embed, row)
}