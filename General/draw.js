
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
	.setName("draw")
	.setDescription("Gives something to draw"),


  async execute(interaction) {
    const { channel, client, options } = interaction;
	const things = [
		"dog",
		"bedroom",
		"rainbow dash",
		"m1a2 abrams",
		"tree",
		"window",
		"f-15e strike eagle",
		"hand",
		"house",
		"applejack",
		"brother",
		"your face",
		"chair",
		"glasses",
		"yuri",
		"reid",
		"spedy face",
	]
	const randomthing = things[Math.floor(Math.random() * things.length)]

	 interaction
		.reply({
			content: `${randomthing}`,
		})

}
}