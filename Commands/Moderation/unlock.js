const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
  .setName("unlock")
  .setDescription("unlocks channel")
  .addChannelOption((option) =>
  option.setName("channel").setDescription("Select a channel").setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(interaction, client) {
    const channel = interaction.options.getChannel("channel");

    const locked = new EmbedBuilder()
    .setTitle(":unlock: Locked!")
    .setDescription(`Unlocked the ${channel}.`)
    .setTimestamp();

    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
      SendMessages: true,
      AttachFiles: true,
    });

    await channel.permissionOverwrites.edit(
      "1038193557766422629", 
      {
        SendMessages: true,
        AttachFiles: true,
      }
    );

    await interaction.reply({
      embeds: [locked],
    });
  } 
}