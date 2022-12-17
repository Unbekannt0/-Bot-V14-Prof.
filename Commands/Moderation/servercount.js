/*
const { Client, ChatInputCommandInteraction, ComponentType, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder, SlashCommandBuilder } = require("discord.js")



/**
 * @param {Client} client
 * @param {ChatInputCommandInteraction} interaction
 */

/*
module.exports = {
  data: new SlashCommandBuilder()
  .setName("server-count")
  .setDescription("Server count (in how many server I am)"),
 //   async execute(client, interaction) { // es muss const { Client } = require("discord.js"); geben!!! mit   * @param {Client} client !!!

     // const serverme = await client.guilds.cache.size
/**
 * @param {Client} client
 * @param {ChatInputCommandInteraction} interaction
 */

/*
 async execute( interaction) {


  if (!interaction.isButton()) return;


  if(!["help","os", "list"].includes(customId)) return;



  const { options, client, user, guilds } = interaction;
  const {guild, member, customId, } = interaction;
/**
 * @param {Client} client
 * @param {ChatInputCommandInteraction} interaction
 */
/*

    const servercount = new EmbedBuilder()
    .setTitle("_Discord - Server - Count_")
    .setColor("Aqua")
    .setDescription(` I am in ** ${client.guilds.cache.size}** servers`)



    client.guilds.cache.size
    const row = new ActionRowBuilder().addComponents(

      new ButtonBuilder()
          .setStyle(ButtonStyle.Success)
          .setCustomId("list")
          .setLabel("List")
          .setEmoji(`🌐`),

      new ButtonBuilder()
          .setStyle(ButtonStyle.Secondary)
          .setCustomId("os")
          .setLabel("Info")
          .setEmoji(`⚙`),

      new ButtonBuilder()
          .setStyle(ButtonStyle.Success)
          .setCustomId("help")
          .setLabel("Help")
          .setEmoji(`📨`),

  )



  const ose = new EmbedBuilder()
  .setDescription("You can get Info about this server with the command `/inforamtion `")
  .setColor("Random")
  .setTimestamp();


  
  const liste = new EmbedBuilder()
  .setDescription("Prof will make a list. . . . . .")
  .setColor("Random")
  .setTimestamp();

  const helpme = new EmbedBuilder()
  .setDescription("We will help you. Type . . . `/suggest `")
  .setColor("Random")
  .setTimestamp();




  switch (customId) {

    case "os": {

		 interaction
				.reply({
          embeds: [ose]
        })
        .catch((err) => {})
    }

    case "list": {
			 interaction
				.reply({
          embeds: [liste]
        })
        .catch((err) => {})
    }
    case "help": {
			  interaction
				.reply({
          embeds: [helpme]
        })
        .catch((err) => {})


  }  
}

  await interaction.reply({embeds: [servercount], components: [row]})// components: [button]})

 }
}

*/



const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("server-count")
  .setDescription("Server count (in how many server I am)"),


  /**
 * @param {Client} client
 * @param {ChatInputCommandInteraction} interaction
 */

  async execute(interaction, client) {
   const {customId} = interaction;

  /**
 * @param {Client} client
 * @param {ChatInputCommandInteraction} interaction
 */    

    const servercount = new EmbedBuilder()
 .setTitle("_Discord - Server - Count_")
 .setColor("Aqua")
 .setDescription(` I am in ** ${client.guilds.cache.size}** servers`)





const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setCustomId("list")
            .setLabel("List")
            .setEmoji(`🌐`),  
            new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setCustomId("os")
            .setLabel("Info")
            .setEmoji(`⚙`),  
            new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setCustomId("help")
            .setLabel("Help")
            .setEmoji(`📨`)


        )
      

    
        switch (customId) {

          case "os":
    
    
            await embed.setDescription("You can get Info about this server with the command `/inforamtion `")
            .setColor("Random")
            .setTimestamp();
          
    
    
    
              return interaction.reply({embeds: [embed]})
        
          case "list":
            await embed.setDescription("Prof will make a list. . . . . .")
            .setColor("Random")
            .setTimestamp();
          
    
              return interaction.reply({embeds: [embed]})
    
    
    
    
              case "help":
    

              await embed.setDescription(`✅ 〢 Ein Teamler ist bereit ihnen zu helfen. ${member.user.tag}`).setFooter({text: member.user.tag, iconURL: member.displayAvatarURL({ dynamic: true }) })
                  .setTimestamp()
                  .setColor("Blurple");
    
                  return interaction.reply({embeds: [embed]})

      }

  await interaction.reply({embeds: [servercount], components: [row]})

     
  }
}
      
    
