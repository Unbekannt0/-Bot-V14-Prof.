

const {EmbedBuilder} = require("discord.js")

module.exports = {
  name: "messageCreate",
  async execute(message, interaction) {
    const {guild} = interaction;
    if (message.author.bot) return;

    if(message.content.includes("s? info")) {
     
       
       
      const embed = new EmbedBuilder()
      .setColor("Blurple").setDescription(`

      TheAdmin is fully moderation bot with lots of features and high-quality moderation! 
      But  <@763833414976929812>  got another one too😉

      **〣  Content Portal**


      <:Discord_icon:1037757899545522227>   General
      <:Discord_icon:1037757899545522227>   Moderation
      <:Discord_icon:1037757899545522227>   Fun


       📊: ${message.guild.memberCount}


      [Invite Me](https://discord.com/api/oauth2/authorize?client_id=1023176164233183263&permissions=8&scope=bot%20applications.commands) • [Support Server](https://discord.gg/2aNyEVKeRb)
      `).setTimestamp()
      .setImage(`https://cdn.discordapp.com/attachments/983731758333829120/1012448199996342392/image1.gif`)

      const zit = new EmbedBuilder()
      .setImage(`https://cdn.discordapp.com/attachments/983731758333829120/1012448199996342392/image1.gif`)
      .setColor("Blurple")

      message.channel.send({embeds: [zit]});
      message.channel.send({embeds: [embed]}); //'Guild name: ** 〣  Content Portal **'  + '\nTotal members: ' + message.guild.memberCount 
      }
  }
}



