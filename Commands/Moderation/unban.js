const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
  .setName("unban")
  .setDescription("Unban a user from the discord server")
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
  .addStringOption(option =>
    option.setName("userid").setDescription("Discord ID of the user you want to unban")
    .setRequired(true)
    ),
    
    
    async execute(interaction) {
      const {options} = interaction;


      const userid = options.getString("userid");

      try {
        await interaction.guild.members.unban(userid);

        const embed = new EmbedBuilder()
        .setDescription(`Succesfully unbanned id ${userid} from the server.`)
        .setColor("Random")
        .setTimestamp();

        await interaction.reply({embeds: [embed],});
      } catch (err) {
        console.log(err);

        const errembed = new EmbedBuilder()
        .setDescription("Please provide a valid member ID") 
        .setColor("Aqua")

        interaction.reply({embeds: [errembed], ephemeral: true})
      }

    }
}