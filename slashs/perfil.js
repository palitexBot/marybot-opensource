module.exports = async (interaction,args,db,client) =>{
  let membro = interaction.member.user.id
  let msg = `Veja o perfil do usuario em `
  client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:msg.send(`${msg}`) 
                   }