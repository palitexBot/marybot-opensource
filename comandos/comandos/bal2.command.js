const jimp = require('jimp')
const db = require('../db')
module.exports = {
name:"bal2",
desc: "Sete o canal que eu irei dar boas vindas",
cat:"mod",
manu:false,
aliases:[],
run:run
}
async function run(client,message,args){
jimp.read(message.author.avatarURL({format:"png"})).then(async avatar=>{
})
}