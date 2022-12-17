const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");
const axios = require("axios");

module.exports  ={
  data: new SlashCommandBuilder()
  .setName("banner")
  .setDescription("Gets a banner from an user")
  .addUserOption((option) =>
  option.setName("user")
  .setDescription("The user's banner")
  ),

  async execute(interaction) {
    const {options, channel, Guild} = interaction;

    const user = options.getUser("user")



    const bannerembedscheiss = new EmbedBuilder()
    .setImage(user.bannerURL())



    await interaction.reply({embeds: [bannerembedscheiss]})







  }
}