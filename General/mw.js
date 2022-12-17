
const { Client, SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, Colors } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("socials")
    .setDescription("View the Socials of my Creator!"),

    async execute(interaction, client) {
        
        const Response = new EmbedBuilder()
        .setTitle("♦️ Socials")
        .setDescription(
        `💻 │ [Github](https://github.com/Unbekannt0)\n📹 │ [Youtube](https://www.youtube.com/channel/UCbTXnqZ1-uYQj6uG4bWQUnw)\n📱 │ [Instagram](https://www.instagram.com/maxii.x6)\n🐦 │ [Twitter](https://www.twitter.com/gokimax_x)`)
        .setTimestamp(Date.now())
        .setColor(0x5fb041)
        .setThumbnail('https://i.imgflip.com/5rom12.jpg')

        interaction.reply({embeds: [Response]})

    }
}