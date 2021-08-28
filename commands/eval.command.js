const {MessageEmbed} = require('discord.js')
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
    const resultado = new MessageEmbed()
    .setColor('YELLOW')
    .setTitle('Comando executado com sucesso!')
    .setDescription(`\ \ \`\`\`xl\n${clean(evaled)}\n\`\`\``)

  // message.reply("aq);
    } catch (err) {
      const erro = new MessageEmbed()
      .setColor('BLUE')
      .setTitle('Aprende a programar antes de colocar comando que não existe p - p')
      .setDescription(`\ \ \`\`\`xl\n${clean(err)}\n\`\`\``)
      message.channel.send("erro ;-; ",erro);
  }
          }          }

