const {EmbedBuilder} = require("discord.js");
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes(`p! Rune`) || message.content.includes("p! rune")  ) {

      const res = new EmbedBuilder()
      .setImage(`https://media.tenor.com/m34YGdjj-jkAAAAC/discord-mod-discord.gif`)


      message.channel.send({content: ` <@753243105204895867> `, embeds: [res]})

    
        

      }
    }
}