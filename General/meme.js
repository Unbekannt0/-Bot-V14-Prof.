const { EmbedBuilder } = require('@discordjs/builders');
const { Client, ChatInputCommandInteraction, SlashCommandBuilder, Colors } = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Sends an epic meme"),

    async execute(interaction, client) {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new EmbedBuilder()
        .setColor(Colors.DarkAqua)
        .setDescription(`From [${random}](https://reddit.com/r/${random})`)
        .setTitle("🎭 Meme")
        .setImage(img)

        interaction.reply({embeds: [embed]})
    }
}