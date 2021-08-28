const Discord = require('discord.js')
module.exports = {
  name:"perfil",
  description:"veja as informações de alguém!",
  aliases:["profile"],
  run:run
}
async function run(client,message,args){
 const Canvas = require('canvas')
 
   /*
   const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  const info = await db.perfilMember(user);
  if(!info) return message.reply("Perfil não existe");
 // console.dir(info)
 */

const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');

    const contextw = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./imgs/perfil.png');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));

context.drawImage(avatar, 25, 25, 200, 200);

context.beginPath();

	// Start the arc to form a circle
	context.arc(125, 125, 100, 0, Math.PI * 2, true);

	// Put the pen down
	context.closePath();

	// Clip off the region you drew on
	context.clip();

  context.font = '60px sans-serif';

	// Select the style that will be used to fill the text in
	context.fillStyle = '#ffffff';

	// Actually fill the text with a solid color
	context.fillText(interaction.member.displayName, canvas.width / 2.5, canvas.height / 1.8);

	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');


   const embed = new Discord.MessageEmbed()
    .setColor('0edceb')
    .setTitle('Seu perfil')
    .setDescription(`Olá ${message.author.username}, aqui está\n`)
    
.addField('Entrou para a mary em', `<t:${Number(info.iniciomary/1000).toFixed(0)}:R>`)
    
.addField('Badges', 'teste')
    .setFooter(`${message.author.username}`, message.author.avatarURL());

    message.reply({file})
}// n fiz o perfilMember ent vai ter chance de n funcionar