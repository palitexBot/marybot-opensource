module.exports = {
name:"suporte",
desc: "Veja o link do meu suporte!",
cat:"info",
manu:false,
aliases:["support"],
run:run
}
async function run(client,message,args){
  message.channel.send("<:marypaimonduvida:869632662577504256> Você precisa de suporte? então entre no servidor! (mary.blacklight.net.br/api/suporte")
}