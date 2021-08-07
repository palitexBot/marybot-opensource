const Discord = require ("discord.js")
module.exports = {
name:"guilds",
desc: "veja em quantos servidores eu estou",
cat:"info",
manu:false,
aliases:["servers"],
run:run
}
async function run(client,message,args){
  const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Servidores')
    .setDescription(`Estou em ${client.guilds.cache.size} servidores uhuuuuu!`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
 message.channel.send(embed)
}