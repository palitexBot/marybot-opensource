module.exports = async function (interaction,args,db,client){
        let ping = client.ws.ping
        let msg = `Meu ping é ${ping}ms!`
client.api.interactions(interaction.id, interaction.token).callback.post({
		data: {
			type: 4,
			data: {
				content: msg, //cade a desc?
				EPHEMERAL: 1
			}
		}
	});
}