const disbut = require('discord-buttons')
module.exports = {
name:"suporte",
desc: "Veja o link do meu suporte!",
cat:"info",
manu:false,
aliases:["support"],
run:run
}
async function run(client,message,args){
  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://mary.blacklight.net.br/api/suporte') .setLabel('Suporte❓'); 

  let row = new disbut.MessageActionRow()
  .addComponents(button1);

  message.channel.send("<:marypaimonduvida:869632662577504256> Você precisa de suporte? então entre no servidor!", row)
}