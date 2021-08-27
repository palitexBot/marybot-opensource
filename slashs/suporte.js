module.exports = async (interaction, args, db, client) => {
	let membro = interaction.member.user.id;
let msg = `
<@${membro}>, entre no meu suporte:\n{x}
`
client.api.interactions(interaction.id, interaction.token).callback.post({
		data: {
			type: 4,
			data: {
				content: msg.replace('{x}', "https://mary.blacklight.net.br/api/suport"), //cade a desc?
				EPHEMERAL: 1
			}
		}
	});//no seu server
    /*
    
     */
    }//;-;