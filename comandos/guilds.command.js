module.exports = {
name:"guilds",
desc: "veja em quantos servidores eu estou",
cat:"info",
manu:false,
aliases:["servers"],
run:run
}
async function run(client,message,args){
 message.channel.send(`estou em ${client.guilds.cache.size} servers!`)
}