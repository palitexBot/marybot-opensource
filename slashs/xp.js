module.exports = async (interaction,args,db,client) =>{
  let membro = interaction.member.user.id
  let guild = interaction.guild.id
  let msg = `<@${interaction.member.user.id}>, seu xp é {x}`
  if(membro != interaction.member.user.id){
            msg = `<@${interaction.member.user.id}>,<@${membro}> tem {x} de xp!`
            let xp = await db.ref(`guilds/${guild}/xp/${membro}`).once("value")
        if(!xp.val()) return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:`A.... como! <@${membro}> nao tem registro na db! peça pra ele falar e use novamente o cmd!` //cade a desc?  
                   }
        }
      });
        client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:msg.replace("{x}",xp.val().xispe) //cade a desc?  
                   }
        }
      });
}
}