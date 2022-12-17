
/*

const {Client, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, SelectMenuBuilder } = require("discord.js");
const { openticket } = require("../../config.json");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("create a ticket message.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

  async execute(interaction) {
    const { guild } = interaction;

  
const menuComponents =
    new ActionRowBuilder().addComponents(
    new SelectMenuBuilder()
      .setCustomId('Wählen sie eine Ticket - Form.')
      .setPlaceholder('Wählen sie eine Ticket - Form.')
      .addOptions(
        {
          label: "English |  📙",                 //"📩〢Allgemeiner Support", "📌〢Anfragen auf Partnerschafften", "🔴〢User Report", "📙〢Beitritt der Company"
          description: 'Kontaktieren sie unser Ticket Team.',
          value: '📩',
        },
        {
          label: "Germany |  📙",
          description: 'Stellen sie eine Anfrage zum Beitritt unserer Company.',
          value: '📙',
        },

      ),
  );

/*
const menuComponents =
    new ActionRowBuilder().addComponents(
    new SelectMenuBuilder()
      .setCustomId('Wählen sie eine Ticket - Form.')
      .setPlaceholder('Wählen sie eine Ticket - Form.')
      .addOptions(
        {
          label: "📩〢Allgemeiner Support",                 //"📩〢Allgemeiner Support", "📌〢Anfragen auf Partnerschafften", "🔴〢User Report", "📙〢Beitritt der Company"
          description: 'Kontaktieren sie unser Ticket Team.',
          value: '📩',
        },
        {
          label: "📙〢Beitritt der Company",
          description: 'Stellen sie eine Anfrage zum Beitritt unserer Company.',
          value: '📙',
        },
        {
          label: "🔴〢User Report",
          description: 'Reporten sie einen User des Servers.',
          value: '🔴',
        },
        {
          label: "📌〢Anfragen auf Partnerschafften",
          description: 'Hier können sie eine Anfrage auf Partnerschafft erstellen.',
          value: '📌',
        },
      ),
  );
  */

/*
  const pictureembed = new EmbedBuilder()
  .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)

    const embed = new EmbedBuilder()
    .setTitle("Ticket - Support")
    .addFields(
			{ name: "Support - Ticket", value: `Hier haben sie die **Möglichkeit**, unser Ticket Team zu kontaktieren. 
      Wählen sie in dem Menu eine Ticket - Form aus, die zu ihrem Anliegen passt. 
      Sie erhalten dann in einem neuen Ticket von unserem Server Team Hilfe. 
      Alternativ können sie auch den Voice Talk Support benutzen.“. `},
		)
    .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)


    await guild.channels.cache.get(openticket).send({
      embeds: [pictureembed] });
      
    await guild.channels.cache.get(openticket).send({
      embeds: [embed],
      components: [menuComponents],
    });

    //interaction.reply({content: "Ticket message has been send.", ephemeral: true,});
  //},
//};


*/



const {Client, slashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, } = require("discord.js");
const { openticket } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("create a ticket message.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

  async execute(interaction) {
    const { guild } = interaction;



  const pictureembed = new EmbedBuilder()
  .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1036008587031498872/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)

    const embed = new EmbedBuilder()
    .addFields(
			{ name: "Support - Ticket", value: `🇩🇪 | Hier können sie den Deutschen Support kontaktieren. Wählen sie dafür die Option „Deutschen - Support“. `},
      { name: "English - Support", value: ` 🇬🇧 | Here you can contact English support. To do this, select the option "English - Support".`} 
		)
    .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1036008587031498872/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)

    const button = new ActionRowBuilder().setComponents(
      new ButtonBuilder().setCustomId("Germany").setLabel("German Support").setStyle(ButtonStyle.Danger).setEmoji("🇩🇪"),
      new ButtonBuilder().setCustomId("English").setLabel("English Support").setStyle(ButtonStyle.Secondary).setEmoji("🇬🇧"),



    );


    await guild.channels.cache.get(openticket).send({
      embeds: [pictureembed]
    })
    await guild.channels.cache.get(openticket).send({
      embeds: [embed],
      components: [button],
    });

    interaction.reply({content: "Ticket message has been send.", ephemeral: true,});
  },
};


