const Discord = require('discord.js')
const disbutpages = require('discord-embeds-pages-buttons')
const disbut = require('discord-buttons')
const Database = require("@replit/database")
const db = new Database()
  module.exports = {
    name: 'ajuda',
    description:"meus comandos",
    categoria:"info",
    aliases: ['help' ,'aj' ,'he' ,'aju', 'h'],
    run: run
  }
  let categorias ={
          moderacao:"",
          diversao:"",
          economia:"",
          informacao:"",
          outros:""
  }
async  function run(client,message,args){
  let lista ="" 
  let types ={
      economia:"",
      moderacao:"",
      info:"",
      div:"",
      res:""
  }
  let nums ={
          economia:0,
          moderacao:0,
          info:0,
          div:0,
          res:0,
          total: 0
  }
  categorias.economia = ""
  client.commands.map(cmd=>{
          nums.total=nums.total+1
      if(cmd.categoria=="economia"){
              categorias.economia = `${categorias.economia}\n
================================
Nome: ${cmd.name}
Desc: ${cmd.description}
================================\n
`
              nums.economia=nums.economia+1;        types.economia=types.economia +" "+cmd.name
      }else if(cmd.categoria=="info"){
categorias.info = `${categorias.info}\n
================================
Nome: ${cmd.name}
Desc: ${cmd.description}
================================\n
`
              nums.info=nums.info+1;       
          types.info=types.info+" "+cmd.name
      }else if(cmd.categoria=="div"){
              categorias.diversao = `${categorias.diversao}\n
================================
Nome: ${cmd.name}
Desc: ${cmd.description}
================================\n
`
              nums.div=nums.div+1;       
          types.div=types.div+cmd.name+" "
      }else if(cmd.categoria=="mod"){
              categorias.moderacao = `${categorias.moderacao}\n
================================
Nome: ${cmd.name}
Desc: ${cmd.description}
================================\n
`
              nums.moderacao=nums.moderacao+1;       
          types.moderacao=types.moderacao+cmd.name+" "
      }else{
        nums.res=nums.res+1
          types.res=types.res+cmd.name+" "
      }
      lista=`

Economia(${nums.economia}):
${types.economia}
Info(${nums.info})
${types.info}
Diversão(${nums.div}):
${types.div}
Moderação(${nums.moderacao}):
${types.moderacao}
Resto(${nums.res}):
${types.res}

      `
  })
const prefixou = await db.get(`prefix${message.guild.id}`) || "m."
// cria tipo embed1, embed2 com os cmds
//assim?
   const embed1 = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Moderação")
    .addField("Vazio", "-.-")
    
    const embed2 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Diversão")
    .addFields([
        {
            name: "abraçar", value: "Use o comando pra abraçar alguem!", inline: true
        },
        {
            name: "curiosidade", value: "Saiba coisas que vc n sabe", inline: true
        },
        {
            name: "bolsonaro", value: "O bolsonaro falou?", inline: true
        }       
        
    ])
    
    // diversao é esse!!!!
    const embed3 = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Economia")
    .addField("bal", "veja o saldo de uma pessoa ou o seu", true)
    .addField("pay", "envie o seu presioso dinheiro pra alguem", true)
    .addField("dep", "deposite seu dinheiro no marybank! m.dep <quantidade ou all>", true)
    .addField("daily", "Pegue o seus mcoins diarios!", true)
    .setFooter("comando executado por "+message.author.tag,message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
    const embedOutros = new Discord.MessageEmbed()
.setTitle(`Outros cmds`)
    .addFields([
        {
            name: "perfil", value: "Veja o perfil de alguem botando a menção(web)", inline: true
        },
        {
            name: "botinfo", value: "Infos da mary", inline: true
        },
        
    ])
    setTimeout(()=>{
      message.reply("Vou te ajudar! yay",{
        embed:{
            title:"Ajuda",
            description:`Comandos:\n${lista}\nTOTAL DE COMANDOS: ${nums.total}\nLinks:\n[Me adicione](https://mary.blacklight.net.br/adicionar) [Meu suporte](https://mary.blacklight.net.br/suporte) [Minha lojinha](https://loja.c0dezin.repl.co)`

        }
    })      
    },100)
    
    var pages = [embed1, embed2, embed3, embedOutros]
   // disbutpages.pages(client, message, pages, 100000, disbut, "blurple", "798332656474652734", "856693465727238174", "856693914836008960")
  //vermelho fica feio
}
