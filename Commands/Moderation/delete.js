const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits, messageLink} = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()

  .setName("deletetest")
  .setDescription("Only ryzm can you this command")
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),


  async execute(interaction) {
    const {channel, options, guild, thread} = interaction;

  const embed = new EmbedBuilder()
  .setTitle("Delete Theard")
  .setAuthor({iconURL: 'https://cdna.artstation.com/p/assets/images/images/051/585/962/original/maddie_creates-poro-icon.gif?1657663488'})
  .setColor("Blurple")
  .setDescription("Theard succesfully deleted ash... ✉️")
 
    interaction.reply({embeds: [embed]})   
    message.react('📥')
    await setTimeout(() => { channel.delete() }, 3500);


 }
}
