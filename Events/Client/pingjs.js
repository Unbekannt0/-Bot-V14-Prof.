const {EmbedBuilder} = require("discord.js");
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes(`p! Skellthing`)) {

      const res = new EmbedBuilder()
      .setImage(`https://media.tenor.com/9u8OPspx7SwAAAAS/cat-kitten.gif`)


      message.channel.send({content: ` <@782961424833052724> `, embeds: [res]})

    
        

      }
    }
}