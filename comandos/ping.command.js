module.exports = {
name:"ping",
desc: "veja meu ping!",
cat:"info",
manu:false,
aliases:["pong"],
run:run
}
async function run(client,message,args){
        const ping = client.ws.ping // ping do bot.

        message.channel.send(`Meu ping é: ${ping}`)
    }
