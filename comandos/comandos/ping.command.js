const Discord = require ("discord.js")
const db = require('../db')

module.exports = {
name:"ping",
desc: "veja meu ping!",
cat:"info",
manu:false,
aliases:["pong"],
run:run
}
async function run(client,message,args){
  message.delete()
  const fetch = require('node-fetch');

const start = Date.now();
await fetch('https://mary.blacklight.net.br');

const startloja = Date.now();
await fetch('https://loja.blacklight.net.br');
const pingloja = Date.now() - startloja

const pingsite = Date.now() - start
  const now = Date.now()
  db.ref(`/cache/${message.author.id}`).update({bot: "bote"}).then(m => {
    const pingdb = Date.now() - now;
  const ping = client.ws.ping // ping do bot.
const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Pong')
    .setDescription(`<a:maryping:830541627780366377>Api: ${ping}ms\n<:marydb:830541627839479828>Db:${pingdb}ms\nWebsite:${pingsite}ms\nLoja:${pingloja}ms`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
       message.channel.send({ embeds: [embed]})
    })
  }
        
