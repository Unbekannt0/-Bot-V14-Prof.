
const {EmbedBuilder} = require("discord.js");
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes(`p! Prof.Smash`)) {

      const res = new EmbedBuilder()
      .setImage(`https://media.tenor.com/lqdVOKiQPQgAAAAd/promoted-discord-mod.gif`)


      message.channel.send({content: ` <@763833414976929812> `, embeds: [res]})

    
        

      }
    }
}

