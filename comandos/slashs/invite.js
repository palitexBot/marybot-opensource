module.exports = async (interaction, args, db, client) => {
	let membro = "<@!"+interaction.member.user+">";
let msg = `
${membro}, essa é sua chance de me add!\nMe add aqui:\n{x}
`
client.api.interactions(interaction.id, interaction.token).callback.post({
		data: {
			type: 4,
			data: {
				content: msg.replace('{x}', "https://mary.blacklight.net.br/api/invite"), //cade a desc?
				EPHEMERAL: 1
			}
		}
	});

}//faça zeu trabalho ;-;