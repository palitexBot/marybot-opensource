const Discord = require('discord.js')
module.exports = {
name:"querocargo",
desc: "comando para ter cargos no meu servidor oficial",
cat:"dev",
manu:false,
aliases:["adaX"],
run:run
}
async function run(client,message,args){
const { MessageButton } = require('discord.js')
const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('Notificar')
                    .setLabel('Cargo de novidades!')
                    .setStyle('PRIMARY'),
                    new MessageButton()
                    .setCustomId('Notificar-drops')
                    .setLabel('Cargo de drops e sorteios')
                    .setStyle('SUCCESS'),
            );
      client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    await interaction.reply({ content: 'Pong!', ephemeral: true});
});
message.channel.send({content: "Pegue seus cargos pelos botões!", components: [row]})
} 