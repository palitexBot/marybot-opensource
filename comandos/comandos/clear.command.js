const { MessageEmbed } = require("discord.js")

module.exports = {
name:"clear",
desc: "Limpe uma quantidade de mensagens!",
cat:"mod",
manu:false,
aliases:["limpar","clean"],
run:run
}
async function run(client,message,args){
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`Você não tem a permissão  \`Gerenciar Mensagens\` para executar este comando.`)
        if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`Eu não tenho a permissão \`Gerenciar Mensagens\` para executar este comando.`)
        if(!args[0]) return message.channel.send(`Coloque um número.`)
        if(isNaN(args[0])) return message.channel.send(`Coloque um número válido.`)
        try{
            message.channel.bulkDelete(Number(args[0]))
        message.channel.send(`Apaguei ${args[0]} mensagens!`)
        } catch (e){
            message.reply(`Erro: `+e)
        }
        
    }
