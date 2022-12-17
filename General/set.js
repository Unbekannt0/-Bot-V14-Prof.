
const {
	SlashCommandBuilder,
	EmbedBuilder,
	ActivityType,
} = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
	.setName("setcounter")
	.setDescription("Set the number counter")
	.addIntegerOption((option) =>
		option
			.setName("number")
			.setDescription("The number to set to")
			.setRequired(true)
	),



  async execute(interaction) {
    const { channel, client, Counting, options } = interaction;
	if (interaction.member.id !== "782961424833052724") {
		return await interaction
			.editReply({
				content: "Only @763833414976929812 can use this command",
			})
			.catch((err) => {})
	}

	const number = interaction.options.getInteger("number")

	let getCount = await Counting.findOne()

	if (!getCount) {
		getCount = await Counting.create({ number: 1 })
	}

	const oldNumber = getCount.number

	await Counting.update({ number: number }, { where: { number: oldNumber } })

	await interaction
		.reply({
			content: `✅ | Set number count from ${oldNumber} to **${number}**`,
		})
		.catch((err) => {})
 }
}