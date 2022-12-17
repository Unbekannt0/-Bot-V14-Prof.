const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const ms = require('ms');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('giveaway-end')
      .setDescription('end the giveaway'),
  
    async execute(client, interaction) {

        const messageID = interaction.options.getString('message-id')

            const giveaway = client.giveawaysManager.giveaways.find((giveaway) => giveaway.messageId === messageID && giveaway.guildId === interaction.guild.id);

            if(!giveaway) return interaction.reply({content: 'Couldn\'t parse the input message id!', ephemeral: true})

            client.giveawaysManager
                .end(messageID)
                .then(() => {
                    return interaction.reply({content: 'The giveaway has been ended.', ephemeral: true});
                })
                .catch((err) => {
                    return interaction.reply({content: `An unusual error has occurred!\n\`\`${err}\`\``, ephemeral: true});
                });

    }
};
