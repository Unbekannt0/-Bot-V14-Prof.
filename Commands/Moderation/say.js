
const { SlashCommandBuilder } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
	.setName("say")
	.setDescription("Make me say whatever you want anywhere >;)")
	.addStringOption((option) =>
		option
			.setName("message")
			.setDescription("The message I say")
			.setRequired(true)
	),




  async execute(interaction) {
    const { channel, client, options } = interaction;
	  const whatever = options.getString("message")

  
		await interaction.reply({
			content: `${whatever}`,
		})

 }
}
