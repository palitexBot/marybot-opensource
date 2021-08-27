const Discord = require('discord.js')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_WEBHOOKS"]})
const fs = require('fs')
const Youtube = require('youtube-mp3-converter')
const db = require('./db')
const uptime = require('./ligar')

const { Manager } = require('erela.js');

const nodes = [
    {
        identifier: 'Node 1',
        host: 'https://lavalink-repl.c0dezin.repl.co',
        port: 2333,
        password: 'lavalinkmary',
        retryAmount: 30,
        retryDelay: 3000,
        secure: false
    }
];

client.manager = new Manager({
  nodes,
  send: (id, payload) => {
    const guild = client.guilds.cache.get(id);
    if (guild) guild.shard.send(payload);
  }
});

client.on('raw', d => client.manager.updateVoiceState(d));

client.once('ready', () => {
  client.manager.init(client.user.id);
  console.log("LavaLink online!")
});

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

client.commands = new Discord.Collection()
client.db = db

app.get("/api/comandos",(req,res)=>res.json(cmds))
app.use("/api/status",(req,res)=>res.json(status))

app.get("/", (req,res)=>res.sendStatus(500))

       const cmd2 = fs.readdirSync(`./comandos`).filter(go => go.endsWith('.js'));
     //  db.ref(`comandos`).set({})


     for (const file of cmd2) {

        const CMDs = require(`./comandos/${file}`);
      client.commands.set(CMDs.name, CMDs);
      console.log(`Comando ${CMDs.name} carregado man 👍`)

     }

const tempo = 5;
const cooldown = new Set()
  
  client.on("messageCreate",async message =>{
      
if(message.webhookID)return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
                let a = await db.ref(`guilds/${message.guild.id}`).once("value")
                
                if(!a.val())return;
                let aa=a.val().prefix
                if(aa == "{mary.defaults.prefix}") aa="m."
            message.channel.send("meu prefixo no "+message.guild.name+" é `"+aa+"` use "+aa+"ajuda para ajuda")
        }
db.ref(`cache/${message.author.id}`).update(message.author)
db.ref(`perfil/${message.author.id}/info`).once("value").then(async eae=>{
    if(!eae.val()) {
   db.ref(`perfil/${message.author.id}`).update({nome:message.author.username,
   info:{
       reps:0,
       sobremim:"Adicione a mary a seu servidor!",
       ultimocomando:"nenhum"
      
   },
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
      db.ref(`/perfil/${message.author.id}/info`).update({ultimocomando: message.content})
      
      
      if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

        const args = message.content.slice(pref.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const comando = client.commands.get(cmd) || client.commands.find(smd => smd.aliases && smd.aliases.includes(cmd));

      if (!comando) {
      
        return message.reply({content: 'Esse comando não existe'})
        db.ref(`/perfil/${message.author.id}/info`).update({ultimocomando: "comando não existe!"})
      }
      if(comando.manu){
        db.ref("perfil/"+message.author.id+"/status/perfil").once("value").then(aa=>{
          if(!aa.val().dev) return message.reply("O comando está em testes, espere até que um dev libere!")
          run()
        })
      }else{run()}
               


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
    const embedcomando = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Comando executado!')
    .setDescription(`<@700157765053841438> O usuario ${message.author.username}(${message.author.id}) usou o comando ${comando.name} no servidor ${message.guild.name}(${message.guild.id})
    com as infos ${args.join(' ')}`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.username}`, message.author.avatarURL());
    //   client.channels.cache.get('877323376643932201').send({content: "Um comando foi executado caso precise dessa informação ela estara aqui :D", embeds: [embedcomando]})
      } catch (err) {
          
          message.reply(`<:marygato:830597221522472960> Algum erro aconteceu no comando ${cmd.name}, talvez alguem comeu uma linha de codigo, se persistir entre no meu suporte(mary.blacklight.net.br/api/suporte)\nerro: ${err}`)
      }
      }
    })   
    
let statuses = (async()=>{
  /*
let canau = client.guilds.cache.get("741810958057472000").channels.cache.get("877323356255428659")
let seti = new Set()
let messages = await canau.messages.fetch()
let array1 = Array.from(messages)
array1.map(a=>{
  seti.add(a[1])
})
let array2 = Array.from(seti)
//let content = array2.sort()
let valormessages = Number(canau.messageCount);
let num = Math.floor(Math.random() * array2.length);
//console.log(num)*/
let message = `✉ | Testes - ${array2[num].author.tag} - Estou em ${client.guilds.cache.size} servidores`
//console.log(message)
client.user.setActivity(message,{
  "type":"LISTENING"
})
   })
   setInterval(statuses,20000) 

      
      
const wait = require('util').promisify(setTimeout);

client.on('interactionCreate', async interaction => {
  
if (!interaction.isCommand()) return;
const user = interaction.options.getUser('usuario')?.id ?? interaction.user.id

const usermoney = await db.ref(`perfil/${user}/economia`).once("value")
 if(!usermoney.val())return interaction.reply({ content: 'Este usuário não possui uma conta.' })
                let userbal=usermoney.val().saldo
	if (interaction.commandName === 'saldo') {
    await interaction.deferReply();
		await wait(5000);
		await interaction.editReply(`O saldo é ${userbal}`)
    
	
    ;
	}
  
    
  
		
  

});

    

  //aaa
  client.login(process.env.TOKEN)