const Discord = require("discord.js")
const database = require('../db.js')
const db = database;
const disbut = require('discord-buttons');
exports.run = async (client, message, args) => {
    let id = message.author.id;
    let ec = await db.ref(`perfil/${id}/economy`).once("value")
    ec=ec.val()
    let valor = args[0]
    let saldo = ec.saldo;
    let banco = ec.bank;
    

/* START CODE */
    if(valor == "all" || valor == "tudo") valor=saldo;
    if(valor == null) return message.reply(`Use dep <valor ou all>`)
/* IFS */
if (saldo == 0) return message.reply("Use m.daily antes de depositar!")
if (valor > 0) return message.reply(`Coloque no minimo 1 pra sacar!`)

}
