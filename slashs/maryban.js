module.exports = async (interaction,args,db,client) =>{
     let membro = interaction.member.user.id
     db.ref(`perfil/${membro}/status/perfil`).once("value").then(vmd=>{
              if(!vmd.val()) return;
              if(vmd.val().dev != 1){ return
     let msg = `o usuario foi punido!`
     db.ref(`perfil/${membro}/status/banned`).update({banido: 1}).then(() =>{
client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:msg.send(`${msg}`) 
                   }
        }
})
     })
     
        }
      });
}

     