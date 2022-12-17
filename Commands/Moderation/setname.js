const { Client, SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, ActivityType, PermissionFlagsBits } = require('discord.js')
//const { } = require('../../config.json') 

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setname")
    .setDescription("Set custom name for your bot")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        
  .addStringOption(
        option =>
        option.setName("name")
        .setDescription("Set bot name")
        .setRequired(true)),
  
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { options } = interaction;

client.user.setUsername(`${options.getString("name")}`).catch(err =>  console.log('❌ Please don\'t changing it too fast & make sure your avatar dosn\'t have \'Discord\' Word'))

        await interaction.reply({content: "✅ Name updated successfully (Check log)", ephemeral: true})
    },
    developer: true
}
