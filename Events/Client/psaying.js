const {EmbedBuilder} = require("discord.js")

module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    if(message.content.includes("ping")) {


      message.channel.send({content: `Pong in you ${message.author} `})

    
        

      }
  }
}