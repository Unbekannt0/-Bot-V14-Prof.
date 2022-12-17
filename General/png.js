const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    cooldown: 5,
	data: new SlashCommandBuilder()
        .setName('dadjokes')
        .setDescription('Random dadjokes'),
    async execute(interaction, client, config) {
        try {
            let response = await fetch(`https://icanhazdadjoke.com/slack`);
            let data = await response.text();
            const img = JSON.parse(data)
            const embed = new EmbedBuilder()
                .setFooter({text: `Dad jokes  <visit icanhazdadjoke.com >`})
                .setColor('#00FF00')
                .setDescription(img.attachments[0].text)
            await interaction.reply({ embeds: [embed]})
        }catch(error) {
            console.log(error)
        }
    },
};
