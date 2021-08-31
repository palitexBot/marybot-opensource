const Discord = require('discord.js')
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
  name:"play",
  description:"abre o youtube together!",
  aliases:["p"],
  run:run
}
async function run(client,message,args,erro){
const { DiscordTogether } = require('discord-together');
if(message.member.voice.channel) {
  const connection = joinVoiceChannel({
	channelId: channel.id,
	guildId: channel.guild.id,
	adapterCreator: channel.guild.voiceAdapterCreator,
});
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                return message.reply(`clique no link não no join! depois pesquise o nome da musica!\n${invite.code}`);
            })
}
else { // usa a nova funcao, erro fiz exclusivamente pra erros
  erro("Olha não sei se alguem pode tocar musica em texto mas eu não consigo, entre em um canal de voz...")
}
}