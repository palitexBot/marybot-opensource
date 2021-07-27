const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const db = require('./db')
const disbut = require('discord-buttons')(client);
const express = require('express')
const app = express()
app.listen(3000)
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()

client.on("ready",(e)=>{
    if(e) return console.error("error: "+e)
    console.log(`A bot ${client.user.tag} está pronta!\n${client.guilds.cache.size} servers`)
   client.guilds.cache.map(s =>{
       console.log(`> Server: ${s.name}, Dono: ${s.ownerID}`)
       
   })


})
client.on("ready",(e)=>{
    setInterval(()=>{
          const cmd2 = fs.readdirSync(`./comandos`).filter(go => go.endsWith('.js'));
       db.ref(`comandos`).set({})


    for (const file of cmd2) {

        const CMDs = require(`./comandos/${file}`);
    //  client.commands.set(CMDs.name, CMDs);
//console.log(`Comando ${CMDs.name} carregado 👍`)

db.ref(`comandos/${CMDs.name}`).update({name: CMDs.name,categoria:CMDs.cat,desc:CMDs.desc,aliases:CMDs.aliases})

    }
    },40000)

})

       const cmd2 = fs.readdirSync(`./comandos`).filter(go => go.endsWith('.js'));
       db.ref(`comandos`).set({})


    for (const file of cmd2) {

        const CMDs = require(`./comandos/${file}`);
      client.commands.set(CMDs.name, CMDs);
      console.log(`Comando ${CMDs.name} carregado man 👍`)

db.ref(`comandos/${CMDs.name}`).update({name: CMDs.name,categoria:CMDs.cat,desc:CMDs.desc,aliases:CMDs.aliases})

    }
client.on("message",m=>{
    
})
    client.on('message', async message => {

      
db.ref(`cache/${message.author.id}`).update(message.author)
db.ref(`perfil/${message.author.id}`).once("value").then(async eae=>{
    if(!eae.val()) {
   db.ref(`perfil/${message.author.id}`).update({nome:message.author.username,
   economia:{
       bitmarys:0,
       saldo:5000,
       daily:{
           ultimoDia:0,
           ultimoMes:0
           }
   },
           status:{
               banned:{
                   banido:0,
                   motivo:"N ta banido uai"
                   },
                   perfil:{
                       owner:0,
                       everson:0,
                       dev:0,
                       mod:0,
                       vip:0,
                       entregador:0,
                       membroAntigo:0
                       }
                       }
   })     
    }
})
      if(message.author.bot) return;
      if(message.channel.type == 'DM') return;
let pref = "m."
        let server = message.guild.id
let debe = await db.ref(`guilds/${server}`)
let dbval = await debe.once("value")
if(!dbval.val()){
    debe.set({
        name: message.guild.name,
        prefix:"{mary.defaults.prefix}",
        premium:false,
        fimpremium:{
            dia:0,
            mes:0,
            ano:0
        }
    })
    return;

}
if(dbval.val().prefix) pref=dbval.val().prefix
if(pref == "{mary.defaults.prefix}") pref="m."
      if(!message.content.startsWith(pref)) return;
      if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

        const args = message.content.slice(pref.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const comando = client.commands.get(cmd) || client.commands.find(smd => smd.aliases && smd.aliases.includes(cmd));

      if (!comando) return message.reply(`Esse comando não existe!`);
      if(comando.manu){
          db.ref(`perfil/${message.author.id}/status/perfil`).once("value").then(vmd=>{
              if(!vmd.val()) return;
              if(vmd.val().dev != 1){ return message.reply(`O comando ${cmd} está bloqueado para o publico! Espere até que liberem o comando e tente novamente mais tarde!`);
  }
          })        

              } 
          
       else {
try {

        comando.run(client, message, args);

      } catch (err) {
          
          message.reply(`<:marygato:830597221522472960> Algum erro aconteceu no comando ${comando}, talvez alguem comeu uma linha de codigo, se persistir entre no meu suporte(mary.blacklight.net.br/api/suporte)`)
      }
      }

      
    })