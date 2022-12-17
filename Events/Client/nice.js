const {EmbedBuilder, Embed} = require("discord.js");
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes("AI!")) {

      const embed = new EmbedBuilder()
      .setTitle("Ai my Bot")
      .setAuthor({ name: 'Ai track',iconURL: 'https://cdna.artstation.com/p/assets/images/images/051/585/962/original/maddie_creates-poro-icon.gif?1657663488'})
      .setFields(
      { name: '⚠️', value: '**He is the nuker**' },
      { name: '👨‍💻', value: '**JavaScript God**' },
      { name: '👑', value: '@RzYm#4438', inline: false },
      { name: '📜', value: 'Gib **!Rules** ein', inline: false },)
      .setFooter({ text: 'He will make you⚠️', iconURL: 'https://cdna.artstation.com/p/assets/images/images/051/585/962/original/maddie_creates-poro-icon.gif?1657663488' })
      .setColor("Aqua")
      .setDescription("HE CAN MAKE YOU AS A BOT Ai!")
      .setTimestamp();



      message.channel.send({content: `really? ${message.author}`})
      message.channel.send({embeds: [embed]})
    }


}
}


//  .setAuthor({iconURL: 'https://cdna.artstation.com/p/assets/images/images/051/585/962/original/maddie_creates-poro-icon.gif?1657663488'})