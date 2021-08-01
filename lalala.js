const { Topgg } = require("topgg-votes");
const client = require("./index")
client.topgg = new Topgg({
    token: process.env.topggtoken, // Your top.gg token
    port: 22565, // Your host port
    auth: "WEBHOOK" // Webhook password
})

client.topgg.postWebhook(client);

// Event for vote notifications
client.on("newVote", (user, bot, isWeekend, query) => {
    console.log(`${user} has voted!`)
})