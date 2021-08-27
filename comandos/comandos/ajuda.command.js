module.exports = {
name:"ajuda",
desc: "Comando que vai redirecionar para esse site!",
cat:"mod",
manu:false,
aliases:["help","aj","?","mary.commands"],
run:run
}
async function run(client,message,args){
  const Discord = require('discord.js')

const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Ajuda')
    .setDescription('<:marypaimonduvida:869632662577504256> Devido as limitaçôes do Discord decidimos mover o ajuda para o site')
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
        
  
let row = new Discord.MessageActionRow().addComponents(
new Discord.MessageButton()
.setURL('https://mary.blacklight.net.br/comandos.mcat')
.setStyle('LINK')
.setLabel('Meus comandos')
)

message.channel.send({ embeds: [embed], components: [row] })
}