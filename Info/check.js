
const userRepData = require("../../schemas/userRep")
const { EmbedBuilder, ApplicationCommandOptionType, SlashCommandBuilder } = require("discord.js");


module.exports = {
data: new SlashCommandBuilder()
.setName("checks")
.setDescription("checklist for ash")
.addUserOption((option) =>
  option.setName("user")
  .setDescription("The user you want to warn")
  .setRequired(true)
  ),
async execute( interaction) {

  const {options, guild, channel} = interaction;

  const user = options.getMember("user")


		const data = await userRepData.findOne({
			GuildID: interaction.guild.id,
			UserID: user.id
		}).catch(console.error);

		const embed = new EmbedBuilder()
		.setTitle(`${user.username}'s Reputation`)
		.setColor("Green")
		.setThumbnail(user.displayAvatarURL())

		if (data) {
			embed.setDescription(`General Rep(s): \`${data.GeneralRep}\`\nTrade Rep(s): \`${data.TradeRep}\``)
		} else {
			embed.setDescription(`General Rep(s): \`0\`\nTrade Rep(s): \`0\``)
		}

		await interaction.reply({ embeds: [embed], ephemeral: true })
	}
}