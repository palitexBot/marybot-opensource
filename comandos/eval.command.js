const Discord = require('discord.js')
const Database = require("@replit/database")
const db = require('../db')
const cc = require("../de")
module.exports = {
name:"eval",
manu:false,
aliases:["ev","execute","run","exe"],
desc: "Isso é usado pelos devs pra executar comandos",
cat:"dev",

run:run
}
async function run(client,message,args){
 async function set(op, value) {
     if(!op || op == "") return;
    return db.ref(op).update(value)
   }
 async function  get(op) {
     if(!op || op == "") return ("use get('caminho'!");
    return db.ref(op).once("value")
   }
   async function daily() {  let msg = ""
let ultimoDailyD = await db.get(`ultimodailydia${message.author.id}`) || 0
let ultimoDailyM = await db.get(`ultimodailymes${message.author.id}`) || 0;
let data = new Date().getDay(); 
let data1 = new Date().getMonth();
if(ultimoDailyD+1 == data && ultimoDailyM+45 == data1) {
let date = new Date()    
message.reply(`Você já pegou daily hoje! Espere mais ${24-date.getHours()+3} horas, ${59-date.getMinutes()} minutos e ${59-date.getSeconds()} segundos!`)
} else {
let p = await db.get(`premium${message.author.id}`) || 0;
let saldo = await db.get(`saldo${message.author.id}`) || 0;
let dailyy = Math.floor(Math.random() * (80000000000-20000000000))+2000;
msg=`Hoje você ganhou..... %s1% mcoins\nagora seu saldo total é %s2%\n%s3%`
if(p == 1) {
msg=msg.replace("%s3%", `Já que você é premium, você ganhou o dobro do que você ia ganhar!`)
    dailyy=dailyy*2;
msg=msg.replace("%s1%", `${dailyy}`)
    }
msg=msg.replace("%s1%", dailyy)
msg=msg.replace("%s3%", "")
db.set(`ultimodailydia${message.author.id}`, data).then(() => {
   db.set(`ultimodailymes${message.author.id}`, data1).then(() => {
    db.set(`saldo${message.author.id}`, saldo+dailyy).then(() => {
        msg=msg.replace("%s2%", saldo+dailyy)
        message.reply(msg).then(() => {
            client.channels.cache.get("856287102378180609").send(`${message.author.tag} pegou o daily usando o m.eval daily() e conseguiu ${dailyy} mcoins`)
        })
    })
}); 
});

}
}

     if(message.author.id != "748965473907114105" & message.author.id != "531997885760536577" & 
     message.author.id != "534883744927055952" &
     message.author.id != "700157765053841438" & message.author.id != "796473029785026581" & message.author.id != "748965473907114105" &message.author.id != "610953368625741855" && message.author.id != "661967786939252737"){
          message.channel.send(`${message.author} Você não tem permissão para fazer isso!`)
          } else {
            
  const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  try {
    
      let code = args.join(" ");
     
      for(let i = 0;i <= 3000;i++) {// o msg.s vem daq
         code=code.replace('&msg', 'message')
         code=code.replace('&send', 'message.channel.send')
         code=code.replace('&react', 'message.react')
         code=code.replace('&reply', 'message.reply')
        code=code.replace("process.env.TOKEN", "'for int token = secret'")
        code=code.replace("client.token", "'for int token = secreto d+'")
        
      }
      //if()
      
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    const resultado = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setTitle('Comando executado com sucesso!')
    .setDescription(`\ \ \`\`\`xl\n${clean(evaled)}\n\`\`\``)

    message.channel.send(resultado);
    } catch (err) {
      const erro = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('Aprende a programar antes de colocar comando que não existe p - p')
      .setDescription(`\ \ \`\`\`xl\n${clean(err)}\n\`\`\``)
      message.channel.send(erro);
  }
          }          }