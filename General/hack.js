
const { SlashCommandBuilder } = require("discord.js")
const ms = require("ms")


module.exports = { 
  data: new SlashCommandBuilder()
	.setName("hack")
	.setDescription("heck someone")
	.addUserOption((option) =>
		option
			.setName("target")
			.setDescription("The user to heck")
			.setRequired(true)
	),


  async execute(interaction) {
    const { channel, client, options } = interaction;
	const victim = options.getMember("target")

	await interaction
		.editReply(`Hacking ${victim.displayName}....`)
		.catch((err) => {})

	const time = "1s"
	setTimeout(async function () {
		await interaction
			.reply(
				`Finding ${victim.displayName}'s Email and Password.....`
			)
			.catch((err) => {})
	}, ms(time))

	const time1 = "2s"
	setTimeout(async function () {
		await interaction
			.editReply(
				`E-Mail: ${victim.displayName}@gmail.com \nPassword: ********`
			)
			.catch((err) => {})
	}, ms(time1))

	const time2 = "5s"
	setTimeout(async function () {
		await interaction
			.editReply("Finding Other Accounts.....")
			.catch((err) => {})
	}, ms(time2))

	const time3 = "10s"
	setTimeout(async function () {
		await interaction
			.editReply("Setting up Epic Games Account.....")
			.catch((err) => {})
	}, ms(time3))

	const time4 = "15s"
	setTimeout(async function () {
		await interaction
			.editReply("Hacking Epic Games Account......")
			.catch((err) => {})
	}, ms(time4))

	const time5 = "24s"
	setTimeout(async function () {
		await interaction
			.editReply("Hacked Epic Games Account!!")
			.catch((err) => {})
	}, ms(time5))

	const time6 = "31"
	setTimeout(async function () {
		await interaction.editReply("Collecting Info.....").catch((err) => {})
	}, ms(time6))

	const time7 = "38s"
	setTimeout(async function () {
		await interaction
			.editReply("Selling data to FBI....")
			.catch((err) => {})
	}, ms(time7))

	const time8 = "43s"
	setTimeout(async function () {
		await interaction
			.editReply(`Finished hacking ${victim.displayName}`)
			.catch((err) => {})
	}, ms(time8))
 }
};