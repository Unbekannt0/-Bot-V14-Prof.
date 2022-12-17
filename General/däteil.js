const {ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverboost")
    .setDescription("Info über den serverboost"),
  
  
    async execute(interaction) {
      const { channel, client, options } = interaction;

   const member = interaction.guild.member;


      const embed = new EmbedBuilder()
      .setTitle("Serverboost")
      .setDescription(` Details zum Server Boosting
      Hier wirst du über alles wichtige aufgeklärt, was du über das Server Boosting wissen musst!
      Wie bekomme ich Boosts?
      Boosts kannst du über folgende Möglichkeiten erhalten:
      :x: Direkter Kauf eines Boosts (4,50$)
      :x: Abonnieren von Discord Nitro
      :x: Erhalten eines Nitro Geschenkes
      Vorteile als Booster
      Da Booster unseren Server mit ihrem Vorhaben unterstützen, werden diese auch mit bestimmten Vorteilen belohnt!
      :x: Den exklusiven Booster Rang
      :x:  Erstelle Diskussionen (Threads)
      :x:  Erhalte 2x Level XP
      :x:  Beantrage deinen eigenen Bot
       Details zum Server Boosting

       Ach übrigens! Dein Ping - - - ${client.ws.ping} - - - *Bruh*
      `)
      await interaction.reply({embeds: [embed], ephemeral: true });
}
}



/*
:sparkles: Details zum Server Boosting
Hier wirst du über alles wichtige aufgeklärt, was du über das Server Boosting wissen musst!
Wie bekomme ich Boosts?
Boosts kannst du über folgende Möglichkeiten erhalten:
:x_: Direkter Kauf eines Boosts (4,50$)
:x_: Abonnieren von Discord Nitro
:x_: Erhalten eines Nitro Geschenkes
Vorteile als Booster
Da Booster unseren Server mit ihrem Vorhaben unterstützen, werden diese auch mit bestimmten Vorteilen belohnt!
:x_: Den exklusiven Booster Rang
:x_: Erstelle Diskussionen (Threads)
:x_: Erhalte 2x Level XP
:x_: Beantrage deinen eigenen Bot
:sparkles: Details zum Server Boosting

*/