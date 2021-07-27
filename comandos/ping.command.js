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

        message.channel.send(`<a:maryping:830541627780366377>Pong, meu ping é: ${ping}`)
    }
