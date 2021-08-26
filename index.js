const Discord = require('discord.js')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_WEBHOOKS"]})
const fs = require('fs')
const db = require('./db')
const uptime = require('./ligar')
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = db
const express = require('express')
const app = express()
client.on("ready",()=>{
  console.warn("Logada na Maryyyyyyyyyyyyyyyyyyyyyy!")
  client.user.setActivity(`m.ajuda`,{
    type:"STREAMING"
  })
    const cmd2 = fs.readdirSync(`./commands`).filter(go => go.endsWith('.js'));
     //  db.ref(`comandos`).set({})
app.listen(3000)
app.get("/",(req,res)=>{




  res.send(String("Tudo Azur"))
})

     for (const file of cmd2) {

        const CMDs = require(`./commands/${file}`);
      client.commands.set(CMDs.name, CMDs);
     // console.log(`Comando ${CMDs.name} carregado 👍`)

     }
     console.log("Todos os cmds foram carregados!")

  })
  

client.on("messageCreate",async(message)=>{
  if(await db.createUser(message.author)) return;
  if(message.author.bot) return;
 
  if(message.channel.type == "DM")return;
  const prefixo = await db.getServerPrefix(message.guild) || "m.";
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
     if(await db.createUser(message.author)) return message.reply(`Olá ${message.author}! Bem vindo(a) na mary!\nPrefixo do server: ${prefixo}\nPrefixo global: m.\nAjuda: ${prefixo}ajuda`);
    message.reply(`Eae ${message.author}, meu prefixo no ${message.guild.name} é: \`${prefixo}\`, use \`${prefixo}ajuda\` pra ajuda!`)
  } else{
    if(!message.content.startsWith(prefixo)) return;
    const args = message.content.slice(prefixo.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const comando = client.commands.get(cmd) || client.commands.find(smd => smd.aliases && smd.aliases.includes(cmd));
        if(!comando) {
          return message.reply(`O comando **${cmd}** não existe, use **${prefixo}ajuda** pros meus comandos!`)
        }
        try{
          if(await db.createUser(message.author)) {
            throw new Error("Parece que te conheci agora, já que se apresentou use o comando novamente, bipbop")
          }
          comando.run(client,message,args)
        } catch(e){
          message.reply(`<:marypaimonduvida:869632662577504256>| ${message.author}, algum erro aconteceu no comando ${cmd} pode ser erro do codigo ou meu erro!\nErro:\n\`\`\`js\n${e}\n\`\`\``)
        }
  }
})
client.on("guildCreate",s=>{
  db.guildAdd(s)
})
client.on("guildDelete",s=>{
  db.guildDelete(s)
})
