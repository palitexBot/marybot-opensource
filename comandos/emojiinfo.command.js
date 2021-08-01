const { MessageEmbed } = require("discord.js")
const { utc } = require("moment")

module.exports = {
name:"emojiinfo",
desc: "veja as info de um emoji",
cat:"div",
manu:false,
aliases:["ei"],
run:run
}
async function run(client,message,args){
        const EMOJI_REGEX = /:[^:\s]*(?:::[^:\s]*)*:/ 

        if(!EMOJI_REGEX.test(args[0])) {
            return message.channel.send(`Isso não é um emoji!`)
        } else {
            const emoji = args[0].trim().split(':')[2].slice(0, 18)

            const emojis = client.emojis.cache.find(emoje => emoje.id == emoji)
if(!emojis) return message.channel.send(`Isso não é um emoji!`)
            const embed = new MessageEmbed()
            .setTitle(`Informações do emoji: ${emojis.name}`)
            .setThumbnail(emojis.url)
            .addField(`É animado ?`, emojis.animated ? 'Sim' : 'Não')
            .addField(`Link: `, `[Clique aqui](${emojis.url})`) 
            .addField(`Criado dia: `, utc(emojis.createdAt).format('LL'))
            .addField(`ID do emoji: `, `\`${emojis.id}\``)
            .addField(`Servidor que o emoji se encontra: `, emojis.guild.name)
            message.channel.send(embed)
        } 
    }
    