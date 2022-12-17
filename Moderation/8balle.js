const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("A magic 8ball command 🎱")
    .addStringOption((option) =>
      option
        .setName("what-to-ask")
        .setDescription("What to Ask")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { options } = interaction;
    const mich8ball = options.getString("what-to-ask");

    let michr = [
      "It is decidedly so.",
      "Ask again later.",
      "No way.",
      "Maybe",
      "The answer is hiding inside you",
      "No",
      "Yes",
    ];
    let mich = michr[Math.floor(Math.random() * michr.length)];

    if (mich === "No way." || mich === "No") {
      const embed = new EmbedBuilder().setColor("Red").setDescription(mich);
      interaction.reply({ embeds: [embed] });
    } else if (
      mich === "Yes" ||
      mich === "The answer is hiding inside you" ||
      mich === "It is decidedly so."
    ) {
      const embed2 = new EmbedBuilder().setColor("Green").setDescription(mich);
      interaction.reply({ embeds: [embed2] });
    } else if (mich === "Maybe" || mich === "Ask again later.") {
      const embed3 = new EmbedBuilder().setColor("Yellow").setDescription(mich);
      interaction.reply({ embeds: [embed3] });
    }
  },
};
