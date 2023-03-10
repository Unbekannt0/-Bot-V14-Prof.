
const { Client, SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, Colors } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("socials")
    .setDescription("View the Socials of my Creator!"),

    async execute(interaction, client) {
        
        const Response = new EmbedBuilder()
        .setTitle("ā¦ļø Socials")
        .setDescription(
        `š» ā [Github](https://github.com/Unbekannt0)\nš¹ ā [Youtube](https://www.youtube.com/channel/UCbTXnqZ1-uYQj6uG4bWQUnw)\nš± ā [Instagram](https://www.instagram.com/maxii.x6)\nš¦ ā [Twitter](https://www.twitter.com/gokimax_x)`)
        .setTimestamp(Date.now())
        .setColor(0x5fb041)
        .setThumbnail('https://i.imgflip.com/5rom12.jpg')

        interaction.reply({embeds: [Response]})

    }
}