module.exports = {
  name:"teste",
  description:"Comando de teste",
  aliases:["test","tst"],
  run:run
}
async function run(client,message,args){
  message.reply({content: "Ok"})
}