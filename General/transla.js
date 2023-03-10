
const {
	ContextMenuCommandBuilder,
	ApplicationCommandType,
	EmbedBuilder,
  SlashCommandBuilder,
  Colors,
} = require("discord.js")
const translate = require("@iamtraction/google-translate")


module.exports = {
	data: new SlashCommandBuilder()
	.setName("translates")
  .setDescription("translates everything")
  .addStringOption(option =>
    option.setName(`content`)
        .setDescription("What do you want to translate?")
        .setRequired(false)
),

async execute(interaction) {
  const { guild, client, options,  } = interaction;
  const raw = options.getString("content")
  const content = raw


	const translated = await translate(content, { to: "en" })







	const Embed = new EmbedBuilder()
		.setColor(Colors.DarkAqua)
		.setTitle("Translation")
    .addFields(
			{ name: "Raw", value: "```" + raw + "```" },
			{ name: "Translated", value: "```" + translated.text + "```" }
		)
		.setFooter({ text: "Powered by Google Translate and by RyZm" })

	

 return await interaction
		.reply({
			embeds: [Embed],
		})
}
}

