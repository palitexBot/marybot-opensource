const Discord = require("discord.js")
const db = require('../db')
module.exports = {
name:"info",
desc: "Veja suas info da mary",
cat:"info",
manu:false,
aliases:["dados"],
run:run
}
async function run(client,message,args){
  let aboutme = await db.ref(`perfil/${message.author.id}/info`).once("value")

  let saldodouser = await db.ref(`perfil/${message.author.id}/economia`).once("value")

                if(!saldodouser.val())return;
                let usersaldo=saldodouser.val().saldo

                if(!aboutme.val())return;
                let aboutmefim=aboutme.val().sobremim

                let rep = await db.ref(`perfil/${message.author.id}/info`).once("value")
                
                if(!rep.val())return;
                let repscount=rep.val().reps
              
          
  const embed1 = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Seu Perfil')
    .setDescription('Opa eae \nAguarda só um segundinho estou pegando suas infos')
    .setTimestamp()
    .setFooter('Já te mando..');
    const embed2 = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Seu Perfil')
    .setDescription("Sobre mim:  `"+aboutmefim+"`\nReps: `"+repscount+"`\nSaldo:`"+usersaldo+"`")
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());
    

   message.reply({embeds:[embed1]}).then(m =>{
     setTimeout(()=>{
       m.edit({embeds:[embed2]})
     }, 3000)
   })
} 