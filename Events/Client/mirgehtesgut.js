const {EmbedBuilder, channelLink} = require("discord.js")
module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
     
    if(message.content.includes("mir geht es gut")  || message.content.includes("und dir?")  || message.content.includes("und dir")  ) {
      message.channel.send(`${message.author}, danke fürs fragen! ... Mir geht es gut`)
    }




  }
}