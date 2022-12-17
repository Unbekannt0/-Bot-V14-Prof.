const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("grants you the verification role.")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
  async execute(interaction, client) {
    const rol_guild = interaction.guild.roles.cache.get("954369118109327390");

    const rol_verify = interaction.member.roles.cache.get(rol_guild.id);

    if (!rol_verify) {
      interaction.member.roles.add(rol_guild);
      interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `The role <@&${rol_guild.id}> has been successfully added.`
            )
            .setColor("Green"),
        ],
        ephemeral: true,
      });
    } else {
      interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `Hello ${interaction.user.tag}, you already have the <@&${rol_guild.id}> role.`
            )
            .setColor("Blue"),
        ],
        ephemeral: true,
      });
    }
  },
};