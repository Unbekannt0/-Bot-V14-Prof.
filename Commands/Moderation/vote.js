const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, Colors } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
	.setName("voting")
	.setDescription("Start a server vote")
	.addStringOption((option) =>
		option
			.setName("message")
			.setDescription("The message to send")
			.setRequired(true)
    )
  .addStringOption((option) =>
     option
       .setName("title")
       .setDescription("Title for the vote")
       .setRequired(true)
	)
	.addChannelOption((option) =>
		option
			.setName("channel")
			.setDescription("The channel to send to")
			.setRequired(false)
	)
	.addStringOption((option) =>
		option
			.setName("emoji1")
			.setDescription("Reaction emoji 1")
			.setRequired(false)
	)
	.addStringOption((option) =>
		option
			.setName("emoji2")
			.setDescription("Reaction emoji 2")
			.setRequired(false)
	)
	.addStringOption((option) =>
		option
			.setName("emoji3")
			.setDescription("Reaction emoji 3")
			.setRequired(false)
	)
	.addStringOption((option) =>
		option
			.setName("emoji4")
			.setDescription("Reaction emoji 4")
			.setRequired(false)

        

      

	),



  async execute(interaction) {
    const { channel, options } = interaction;


  const things = options.getString("title")
	const whatever = options.getString("message")
	const voting = options.getChannel("channel")

	const emoji1 = options.getString("emoji1") || "👍"
	const emoji2 = options.getString("emoji2") || "👎"
	const emoji3 = options.getString("emoji3")
	const emoji4 = options.getString("emoji4")




  const succesEmbed = new EmbedBuilder()
  .setTitle(`**\`${things}\`**`)
  .setDescription(`${whatever}`)
  .setColor(Colors.DarkBlue);

  
	voting
    .send({ embeds: [succesEmbed], ephemeral: true })
		.catch((err) => {})
		.then(async (msg) => {
			await msg.react(emoji1).catch((err) => {})
			await msg.react(emoji2).catch((err) => {})
			if (emoji3) {
				await msg.react(emoji3).catch((err) => {})
			}
			if (emoji4) {
				await msg.react(emoji4).catch((err) => {})
			}
		})

	interaction.deleteReply().catch((err) => {})


  if (interaction.user.id !== "763833414976929812") {
		return await interaction
			.editReply({
				content: "Only RzYm can use this command",
			})
			.catch((err) => {})
	}
 }
}
