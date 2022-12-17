const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Check your or other people's avatar")
    .addUserOption((option) =>
      option.setName('user')
        .setDescription('check other avatar or yours')
        .setRequired(false)
    ),
    
    async execute (interactin) {
        const avatarmention = interactin.options.getUser('user') || interactin.user
        embed = new EmbedBuilder()
        .setTitle(avatarmention.username)
        .setColor("Random")
        .setImage(`${avatarmention.displayAvatarURL({size: 1024, format: 'png', dynamic: true})}`)
        return interactin.reply({
            embeds: [embed]
        }
      )
    }
}