const Discord = require('discord.js')
module.exports = {
  name:"perfil",
  description:"veja as informações de alguém!",
  aliases:["profile"],
  run:run
}
async function run(client,message,args){
 const Canvas = require('canvas')

   const db = client.db;
  const user = message.mentions.users.first() || client.users.cache.find(user => user.username == args[0]) || client.users.cache.get(args[0]) || message.author;
  const info = await db.perfilMember(user);
  if(!info) return message.reply("Perfil não existe");



const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');

    const applyText = (canvas, text) => {
      
	const context = canvas.getContext('2d');
	let fontSize = 70;

	do {
		context.font = `${fontSize -= 10}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 300);

	return context.font;
};

		const background = await Canvas.loadImage('./imgs/perfil.png');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		context.strokeStyle = '#0099ff';
		context.strokeRect(0, 0, canvas.width, canvas.height);

		context.font = '28px sans-serif';
		context.fillStyle = '#ffffff';
		context.fillText('Profile', canvas.width / 2.5, canvas.height / 3.5);

		context.font = applyText(canvas, `${user.tag}!`);
		context.fillStyle = '#ffffff';
		context.fillText(`${user.tag}!`, canvas.width / 2.5, canvas.height / 1.8);

		context.beginPath();
		context.arc(125, 125, 100, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();

		const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
		context.drawImage(avatar, 25, 25, 200, 200);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'perfil.png');

		message.reply({content: "Caso esteja procurando mais informações use o comando m.webperfil!", files: [attachment] });
}