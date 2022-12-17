const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Colors } = require("discord.js");



module.exports = {
  data: new SlashCommandBuilder()
  .setName("hilfe")
  .setDescription("Dieses command ist nur zum test da!")
  .addStringOption((option) =>
  option.setName("description")
  .setDescription("was wollen sie mitteilen?")
  )

  
.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const {channels, options, guild, member} = interaction;


    const description = options.getString("description");

    const embed = new EmbedBuilder()
        .setColor(Colors.White)
        .setTitle(`@${interaction.member.id}, ${member.displayAvatarURL}`)
        .setDescription(`A suggestion made by ${member}, ${description}`)
        .setFooter({ text: member.user.tag, iconURL: member.displayAvatarURL({ dynamic: true }) })

    await guild.channels.cache.get('1031834267489157120').send({
        embeds: [embed] })


       await interaction.reply({ content: ":white_check_mark: | Your suggestion has been succesfully submitted ✉️ .", ephemeral: true });
 },
};
