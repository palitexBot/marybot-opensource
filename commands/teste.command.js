const Discord = require('discord.js')
module.exports = {
  name:"teste",
  description:"Comando de teste",
  aliases:["test","tst"],
  run:run
}
async function run(client,message,args){
  const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('teste')
    
    .setDescription('a')
    
    .setTimestamp()
    .setFooter('a');
  message.reply({content: "Reply ok"})
  message.channel.send({content: "channel.send Ok"})
  message.author.send({content: "teste"}).catch(console.log)
  
  message.channel.send({content: "author.send Ok"})
  message.channel.send({content: "embed ok", embeds: [embed]})
 
}