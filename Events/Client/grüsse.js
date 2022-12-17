const {EmbedBuilder, channelLink} = require("discord.js")
module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
     
    if(message.content.includes("Hallo")  || message.content.includes("hallo") ) {
      message.channel.send(`Hallo ${message.author}, wie geht es dir?`)
      message.react('👋');
    }




  }
}