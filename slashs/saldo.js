module.exports = async (interaction,args,db,client) =>{
     let membro =interaction.member.user.id
    
        if(args){
            args.map(a=>{
                membro=a.value
            })
        }
        let msg = `<@${interaction.member.user.id}>, você tem {x} mcoins!`
        if(membro != interaction.member.user.id){
            msg = `<@${interaction.member.user.id}>,<@${membro}> tem {x} mcoins!`
        }
        let sald = await db.ref(`perfil/${membro}/economia`).once("value")
        if(!sald.val()) return client.api.interactions(interaction.id, interaction.token).callback.post({
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
            content:msg.replace("{x}",sald.val().saldo) //cade a desc?  
                   }
        }
      });
}