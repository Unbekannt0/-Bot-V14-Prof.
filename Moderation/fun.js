
const { SlashCommandBuilder } = require("discord.js")


module.exports = { 
  data: new SlashCommandBuilder()
	.setName("catsay")
	.setDescription("Make The Cat say thing of your choice")
	.addStringOption((option) =>
		option
			.setName("text")
			.setDescription("The text to say")
			.setRequired(true)
	),


  async execute(interaction) {
    const { channel, client, options } = interaction;

	const text = options.getString(`text`)

    interaction.reply({ attachment: `https://cataas.com/cat/cute/says/${text}`})
		.catch((err) => {})
 },
};