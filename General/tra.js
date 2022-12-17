const translate = require("@iamtraction/google-translate");
const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
  ContextMenuCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Translate")
    .setType(ApplicationCommandType.Message),
  /**
   * @param {ContextMenuCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.deferReply({ ephemeral: true });

    const { channel, targetId } = interaction;

    const query = await channel.messages.fetch({ message: targetId });
    const raw = query.content;

    const Translated = await translate(query, { to: "de" });

    return interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Translation")
          .setColor("Blue")
          .addFields([
            {
              name: "Raw",
              value: "```" + raw + "```",
              inline: false,
            },
            {
              name: "Translated",
              value: "```" + Translated.text + "```",
              inline: false,
            },
          ]),
      ],
    });
  },
};