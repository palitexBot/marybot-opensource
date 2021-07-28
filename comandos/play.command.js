const Discord = require("discord.js")
const mpeg = require("ffmpeg-static")
const opus = require("opusscript")
const ytdl = require('ytdl-core');
var search = require('youtube-search');

var opts = {
  maxResults: 1,
  key: process.env.ytkey
};
module.exports = {
name:"play",
desc: "toque musica",
cat:"div",
manu:false,
aliases:["tocar"],
run:run
}
async function run(client,message,args){
let musicas = [
"https://youtu.be/kJQP7kiw5Fk",
"https://youtu.be/Olp_2JenI5A",
"https://youtu.be/-73pafJ9RFg",
"https://youtu.be/_h1oylofZd0",
"https://youtu.be/gqVO7vNj_5U",
"https://youtu.be/lwTKVzbGlzM",
"https://youtu.be/72UO0v5ESUo"
]
let num = Math.floor(Math.random() * musicas.length)
let musica = musicas[6]
let m = args.join()
if(m == "") return message.reply("use m.play <nome ou id ou url ou um codigo ou RANDOM(qualquer musica q ja foi tocada)>!")
if(m == "2842") m="https://youtu.be/LTMjsgS_c9M"
if(m == "6619") m="https://youtu.be/-73pafJ9RFg"
if(m=="saas") m="https://youtu.be/HMIO68zdv4o"
if(m == "RANDOM") m=musicas[num]
let pesquisa = await search(m, opts).catch(e=>console.log(e));
//console.dir(pesquisa)
//pesquisa=pesquisa
let ytRes = pesquisa.results

// if(err) return console.log(err);

    if (message.member.voice.channel) {
/*
* ajuda aq
*/
//console.dir(client)
         ytRes.map(r => {
    musica=r.link
    message.channel.send(`
    Tocando agora: \`${r.title}\` id ${num} Pedido por: ${message.author.tag}(${message.author.id})`)
})// ajudaaa

      const connection = await message.member.voice.channel.join();
    connection.play(ytdl(musica, {filter: "audioonly"}))

        
    } else {
        message.reply("entre no canal de voz...")
    }}