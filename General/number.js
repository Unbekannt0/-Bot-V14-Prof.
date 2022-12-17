const { SlashCommandBuilder } = require("discord.js")


module.exports = { 
  data: new SlashCommandBuilder()
	.setName("number")
	.setDescription("Pick a random integer between two numbers, inclusive")
	.addIntegerOption((option) =>
		option
			.setName("number1")
			.setDescription("The first number")
			.setRequired(true)
	)
	.addIntegerOption((option) =>
		option
			.setName("number2")
			.setDescription("The second number")
			.setRequired(true)
	),



  async execute(interaction) {
    const { channel, client, options } = interaction;
	const num1 = options.getInteger("number1")
	const num2 = options.getInteger("number2")
  const randomnumber = getRandomIntInclusive(num1, num2)


	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min)

	}


  await interaction.reply({
    content: `From ${num1} to ${num2}, I choose... **${randomnumber}**`,
  })
  .catch((err) => {})

 }
} 