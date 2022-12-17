const {SlashCommandBuilder} = require("discord.js");



module.exports = {
  data: new SlashCommandBuilder()
  .setName("send")
  .setDescription("Make me DM a user")
  .addUserOption((option) =>
  option
  .setName("user")
  .setDescription("The user to DM")
  .setRequired(true)
  )
  .addStringOption((option) =>
  option
  .setName("message")
  .setDescription("The message to DM")
  .setRequired(true)
  ),

  async execute(interaction) {
    const {channel, client, options} = interaction;

  const user = options.getMember("user")
  const message = options.getString("message")
  
  
  if(user.id === "1023176164233183263") {
    return await interaction.reply({
      content: "I can't DM myself lol😑"
    })
    .catch((err) => {})
  }

  user.send(message).catch(async (err) => {
    console.log(err)

    return await interaction.editReply({
      content: `Failed to send message, please try again`,
    })
    .catch((err) => {})
  })


  await interaction.reply({
    content: `**${message}**Succesfully sent to **${user}**! (this message will autodelete)`
  })
  .catch((err) => {})

  await setTimeout(() => { interaction.deleteReply()}, 3500);

  },
};