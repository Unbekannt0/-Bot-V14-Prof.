const { ChatInputCommandInteraction, EmbedBuilder, Client, SlashCommandAssertions, SlashCommandBuilder } = require("discord.js")

module.exports = {
data: new SlashCommandBuilder()
.setName("servercount")
.setDescription("server count form the bot . . .")
,
    /**
     *
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
        const { user } = interaction

        if (user.id !== "763833414976929812") return interaction.reply({
            embeds: [new EmbedBuilder()
                .setColor("DarkRed")
                .setDescription("This command is for the developers only!")
            ], ephemeral: true
        })

        let servers = ""
        let count = 0
        client.guilds.cache.forEach((guild) => {
            servers += `Name: ${guild.name} | ID: ${guild.id}\n${guild.memberCount} Members | Owner: ${guild.ownerId}\n\n`
            count += 1
        })

        const LIST = new EmbedBuilder()
            .setAuthor({ name: `${client.user.username} is in ${count} server`, iconURL: client.user.displayAvatarURL() })
            .setColor("DarkButNotBlack")
            .setDescription(`\`\`\`${servers}\`\`\``)
        return interaction.reply({ embeds: [LIST] })
    }
  }