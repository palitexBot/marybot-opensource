const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const db = require('./db')
const uptime = require('./ligar')
const disbut = require('discord-buttons')(client);
const express = require('express')
const { AutoPoster } = require('topgg-autoposter')
const fetch = require('node-fetch')
let cmds = []
let status = {}

setTimeout(()=>{
uptime(10000)
}),1000
setTimeout(()=>{
const poster = AutoPoster(process.env.topggtoken, client) // Seu cliente discord.js
const { Topgg } = require("topgg-votes");
client.topgg = new Topgg({
    token: process.env.topggtoken, // Seu token do to.gg
    port: 22565, // Sua porta de host
    auth: "zazmary" // Senha do webhook
})

client.topgg.postWebhook(client);

// Evento para notificações de voto no top.gg
client.on("newVote", (user, bot, isWeekend, query) => {
    console.log(`${user} votou!`)
})
setTimeout(()=>{
// Opicional
poster.on('posted', (stats) => { // ran when succesfully posted
//console.dir(stats)
  console.log(`Status postado para Top.gg | ${stats.serverCount} servers`)
  }),6000

})
const app = express()

app.listen(89)
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = db

app.get("/api/comandos",(req,res)=>res.json(cmds))
app.use("/api/status",(req,res)=>res.json(status))

app.get("/", (req,res)=>res.sendStatus(500))
client.on("ready",(e)=>{
    if(e) return console.error("error: "+e)
    console.log(`A bot ${client.user.tag} está pronta!\n${client.guilds.cache.size} servers`)
   client.guilds.cache.map(s =>{
      
       db.ref(`cache/${s.ownerID}`).once("value").then(Aaa=>{
               let tag =""
               if(!Aaa.val()) tag="Não conheço#1"
               if(Aaa.val()) tag=Aaa.val().tag
                console.log(`> Server: ${s.name}(${s.id}), Dono: ${tag}(${s.ownerID})`)
       })
   })


})
client.on("guildDelete", guild => {
  console.log("sai de uma guild" ${guild.id}))
}
client.on("ready",async(e)=>{

setInterval(async()=>{
    let servers = client.guilds.cache.size
    let membros = client.users.cache.size
    let canais = client.channels.cache.size
    let mcoinstotais = 0;
    let bitmarystotais = 0;
         const db4 = await db.ref(`perfil`).once('value');
    const array = Object.keys(db4.val());
     array.forEach((e) => {
         //    console.log(db4.val()["perfil."+e])
         db.ref(`perfil/${e}/economia`).once("value").then(async aa=>{
        mcoinstotais=mcoinstotais+Number(aa.val().saldo)
         })
            
         })
     
      
    
  let status={
        servers,membros,canais,mcoinstotais,bitmarystotais
    }
    //console.log(status)

    fetch("https://mary.blacklight.net.br/apd/@"+process.env.apkey, {
          method: 'POST',
          body: JSON.stringify(status),
          headers: { 'Content-Type': 'application/json' },}).then(a=>a.json().then(aaa=>{
        //      console.log(aaa)
          }))
},10000)
},1000)
       const cmd2 = fs.readdirSync(`./comandos`).filter(go => go.endsWith('.js'));
       db.ref(`comandos`).set({})


     for (const file of cmd2) {
async function a(){
        const CMDs = require(`./comandos/${file}`);
      client.commands.set(CMDs.name, CMDs);
      console.log(`Comando ${CMDs.name} carregado man 👍`)

db.ref(`comandos/${CMDs.name}`).update({name: CMDs.name,categoria:CMDs.cat,desc:CMDs.desc,aliases:CMDs.aliases})
    const meuSet = new Set()
    const dayabase = await db.ref(`comandos`).once("value")

    const array = Object.keys(dayabase.val());
    array.forEach(async(e)=>{
        meuSet.add(dayabase.val()[e])
    })
    cmds = Array.from(meuSet)

    }
    a()
     }
    db.ref(`comandos`).set({})
    })


const tempo = 3;
const cooldown = new Set()
  client.on("message",async message =>{
      
if(message.webhookID)return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
                let a = await db.ref(`guilds/${message.guild.id}`).once("value")
                
                if(!a.val())return;
                let aa=a.val().prefix
                if(aa == "{mary.defaults.prefix}") aa="m."
            message.channel.send("meu prefixo no "+message.guild.name+" é `"+aa+"` use "+aa+"ajuda para ajuda")
        }
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
                       parceiro:0,
                       membroAntigo:0,
                       beta:0
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
        linguagem:"{mary.defautls.language}",
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
              if(vmd.val().dev != 1){ return
               message.reply(`O comando ${cmd} está bloqueado para o publico! Espere até que liberem o comando e tente novamente mais tarde!`);
  }else{run()}
          })        

              }
          
       else {run()     
      }

      function run(c){
          try {
        
if(cooldown.has(message.author.id)){
    return message.reply(`Espere ${tempo} segundos pra usar o cmd!`)
}
cooldown.add(message.author.id)
setTimeout(()=>{
    cooldown.delete(message.author.id)
},tempo*1000)
       comando.run(client,message,args)

      } catch (err) {
          
          message.reply(`<:marygato:830597221522472960> Algum erro aconteceu no comando ${cmd.name}, talvez alguem comeu uma linha de codigo, se persistir entre no meu suporte(mary.blacklight.net.br/api/suporte)\nerro: ${err}`)
      }
      }
    
    })
  client.ws.on("INTERACTION_CREATE", async interaction => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;
    db.ref(`perfil/${interaction.member.user.id}/status/banned`).once("value").then(async bandb=>{
        if(!bandb.val()){}else{
if(bandb.val().banido != 0){
    let motivo = bandb.val().motivo;
    let msg = `<@${interaction.member.user.id}>, triste realidade você foi maryban!\nMotivo: ${motivo}\n`
return client.api.interactions(interaction.id,interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:msg  
                   }
        }
      });/*
      FALA AQ DENTRO!
      boooora fazer dps ok?
      ok
       */
}
        }
    })
    if(command =="saldo"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/saldo")
   cmd(interaction,args,db,client)
    }
    if(command =="xp"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/xp")
   cmd(interaction,args,db,client)
    }
    if(command =="pay"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/pay")
   cmd(interaction,args,db,client)
    }
    if(command =="maryban"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/maryban")
   cmd(interaction,args,db,client)
    }
    if(command =="agentedeelite"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/atengedeelite")
   cmd(interaction,args,db,client)
    }
    if(command =="perfil"){// aqui aparece command=="saldo" se for saldo executa
   let cmd = require("./slashs/perfil")
   cmd(interaction,args,db,client)
    }
  })
  //aaa