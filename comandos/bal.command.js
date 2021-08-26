module.exports = {
name:"saldo",

desc: "Veja o saldo de alguem!",
cat:"ec",
aliases:["bal","balance","atm","banco","dinheiro", "money"],
manu:false, // true se quiser deixar bloqueado o cmd, false se quiser liberar
run:run
}
async function run(client,message,args){
  message.reply(`
> AVISO
- esse comando foi migrado! Use /saldo ao inves de m.bal!
- se n aparecer me de as perms application.commands aqui: https://mary.blacklight.net.br/api/invite

  `)
}// fim