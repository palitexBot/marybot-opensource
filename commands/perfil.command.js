const Discord = require('discord.js')
module.exports = {
  name:"perfil",
  description:"veja as informações de alguém!",
  aliases:["profile"],
  run:run
}
async function run(client,message,args){
 const Jimp = require('jimp')
 
   /*const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  const info = await db.perfilMember(user);
  if(!info) return message.reply("Perfil não existe");
 // console.dir(info)
 
 Jimp.read('./imgs/perfil.png', (err, Perfil) => {
   Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
  if (err) throw err;
  Perfil
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    image.print(font, 10, 10, user.username);
   })
});

   const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Seu perfil')
    .setDescription(`Olá ${message.author.username}, aqui está\n`)
    
.addField('Entrou para a mary em', `<t:${Number(info.iniciomary/1000).toFixed(0)}:R>`)
    
.addField('Badges', 'teste')
    .setFooter(`${message.author.username}`, message.author.avatarURL());

    message.reply({embeds: [embed]})
}// n fiz o perfilMember ent vai ter chance de n funcionar