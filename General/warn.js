const { SlashCommandBuilder, PermissionFlagBits, Colors, EmbedBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
  .setName("testwarn")
  .setDescription("Warns a member")
  .addUserOption((option) =>
  option.setName("user")
  .setDescription("The user you want to warn")
  .setRequired(true)
  )
  .addStringOption((option) =>
  option.setName("reason")
  .setDescription("The reason for the warn")
  .setRequired(true)
  ),





  async execute(interaction) {
    const {channel, client, options, Infaction } = interaction;


    const user = options.getMember("user")
    const reason = options.getString("reason")

    //The log channel ID ! This will send your channel (Log channel) a message

    const logs = await client.channels.cache.get("1035991980427182190")



    const Embed = new EmbedBuilder()
    .setColor(Colors.Aqua)
    .setAuthor({
      name: `${user} wurde wegen ${reason} gewarnt!`,
      iconURL: `${user.displayAvatarURL({
        size: 4096,
        dynamic: true,
      })}`,
    })
    .setDescription(`The warn was created by <@${interaction.member.id}>`)
    .setTimestamp()




    const userEmbed = new EmbedBuilder()
    .setTitle("**WARN**")
    .setColor(Colors.Red)
    .setTimestamp()
    .setDescription(`LOL ... you got the a warn because of ${reason} by  <@${interaction.member.id}>`)



    user.send({embeds: [userEmbed] });

    console.log(user) 
    
    

    await interaction.reply({embeds: [Embed],})

    .catch((err) => {})


    return logs.send({embeds: [Embed],})
    .catch((err) => {})
  }

}