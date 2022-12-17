const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
	.setName("pp")
	.setDescription("PP size")
	.addUserOption((option) =>
		option
			.setName("user")
			.setDescription("User to PP rate")
			.setRequired(true)
	),



  async execute(interaction) {
    const { channel, client, options } = interaction;

	const member = options.getMember("user")


	if(member.id === "763833414976929812") {
    return await interaction.reply({
      content: `${member.displayName}'s pp is **oversized**`
    })
    .catch((err) => {})
  }

	if(member.id === "753243105204895867") {
    return await interaction.reply({
      content: `Leider habe ich nichts über ${member.displayName} gefunden 🧐`
    })
    .catch((err) => {})
  }


	const size = Math.floor(Math.random() * 21)

	let PP = "8"

	for (let i = 0; i < size; i++) {
		PP += "="
	}

	PP += "D"







	const Embed = new EmbedBuilder()
		.setColor(Colors.DarkNavy)
		.setTitle(`${member.displayName}'s PP`)
		.setDescription(PP)



	await interaction.reply({
			embeds: [Embed],

		})
 }	
}