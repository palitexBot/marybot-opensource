module.exports = async function (interaction,args,db,client){
     let membro =interaction.member.user.id
    args.map(a=>{
        if(a.name != "quantidade"){}else{
let canal = interaction.channel_id
let ccanal = client.channels.cache.get(canal)
if(a.value > 99 || a.value<2){
return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:`Use /clear <menos de 99 mais de 2>` //cade a desc?  
                   }
        }
      });
}
client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content:`Limpando!` //cade a desc?  
                   }
        }
      })
        }
    })
}