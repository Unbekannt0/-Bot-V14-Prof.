const {EmbedBuilder} = require("discord.js")
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;


    const embed = new EmbedBuilder()
    .setImage(`https://cdn.dribbble.com/users/55063/screenshots/2266143/9_squares_dot.gif`)
    .setTimestamp()
    .setColor("Random")
    .setDescription(`Wird werden dir noch helfen **${message.author}**`);

    if(message.content.includes("!hilfe")) {

      message.channel.send({content: `@RzYm`, embeds: [embed]})

    
        

      }
    }
}