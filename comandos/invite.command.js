const disbut = require ('discord-buttons')
module.exports = {
name:"invite",
desc: "me convide para o seu servidor!",
cat:"info",
manu:false,
aliases:["add"],
run:run
}
async function run(client,message,args){
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/invite') 
  .setLabel('Me adicione➕'); 

let row = new disbut.MessageActionRow()
  .addComponents(button1);

  message.channel.send(`Vejo que você quer me adicionar, muito obrigado`, row)
}