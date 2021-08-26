
const Discord = require("discord.js")
module.exports = {
name:"suporte",
desc: "Veja o link do meu suporte!",
cat:"info",
manu:false,
aliases:["support"],
run:run
}
async function run(client,message,args){
  const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Suporte')
    .setDescription('<:marypaimonduvida:869632662577504256> Você precisa de suporte? então entre no servidor!')
    
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/suporte') .setLabel('Suporte❓'); 

  let row = new disbut.MessageActionRow()
  .addComponents(button1);

  message.channel.send(embed, row)
}