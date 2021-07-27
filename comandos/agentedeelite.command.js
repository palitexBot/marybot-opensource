module.exports = {
name:"agente-de-elite",
desc: "ester-egg para o scrollz!",
cat:"div",
manu:false,
aliases:["atengedeelite","agentedeelite"],
run:run
}
async function run(client,message,args){
  try {
    let name = ('Felipe neto');

    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/864575682633007126/869599803523334264/nelipe_neto.jpg'} //se quiser colocar um avatar pro webhook
    

    message.channel.createWebhook(name, avatar).then(w => { //aqui ele ira criar o webhook com o nome e avatar 
      w.send('atenge de elite, dono do meme: <@534883744927055952>').then((
      ) => w.delete()) //aqui o bot ira deletar o webhook apos a mensagem ser enviada

    });

    } catch (err) {
        message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**') //caso o bot n tenha permissão de criar o webhook
    }
}