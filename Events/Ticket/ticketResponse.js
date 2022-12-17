/*const {ChannelType, ButtonInteraction, SelectMenuBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, PermissionFlagsBits, Colors} = require("discord.js");
const ticketSchema = require("../../Models/Ticket");
const { ticketParent, everyone } = require("../../config.json");

module.exports = {
    name: "interactionCreate",

    async execute(interaction) {
      const {guild, member, customId , channel , ChannelID } = interaction;
      const label = interaction;
      const {ViewChannel, SendMessages, MangeChannels, ReadMessageHistory } = PermissionFlagsBits;
      const ticketId = Math.floor(Math.random() * 9000) + 1000;

      if (!interaction.isSelectMenu()) return;

 

   // if(!["📩〢Allgemeiner Support", "📌〢Anfragen auf Partnerschafften", "🔴〢User Report", "📙〢Beitritt der Company"].includes()) return;  

   const button  = new ActionRowBuilder().setComponents(
    new ButtonBuilder().setCustomId('close').setLabel('Close ticket').setStyle(ButtonStyle.Primary).setEmoji('✉️'),
    new ButtonBuilder().setCustomId('lock').setLabel('Lock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔒'),
    new ButtonBuilder().setCustomId('unlock').setLabel('Unlock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔓'),
    new ButtonBuilder().setCustomId('claim').setLabel('Claim ticket').setStyle(ButtonStyle.Primary).setEmoji('📥')

);


   const allgemein = new EmbedBuilder()
   .setTimestamp()
   .setTitle("📩 Allgemeiner Support")
   .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
   .setDescription(
     ` Willkommen im allgemeinen Support.
   Sobald ein Teamler **Zeit** gefunden hat, wird ihnen geholfen. 
   Schildern sie uns währendes so **genau** wie Möglich ihr Anliegen. 
   Achten sie bitte auf ihre Art und Weise im Ticket. Halten sie sich an das Regelwerk. 
   **Tipps** zum Beschreiben des Anliegens: 
   
   **Was** ist passiert?
   **Wer** war beteiligt? 
   **Wo** ist es passiert?(Channel)
   
   Sie haben ein **Feedback** zu dem Teamler, der ihnen geholfen hat? 
   Gerne dürfen sie das in #1038215963071488080 schreiben oder direkt hier im Ticket. 
   Wir freuen uns über Lob, aber auch über sachliche Kritik.`
   )

   //   if(!("📩 Allgemeiner Support", "📌 Anfragen auf Partnerschafften", "🔴 User Report", "📙 Beitritt der Company").includes(customId),
     
   if(!("📌 〢 Anfragen auf Partnerschafften").includes(),  await channel.send({embeds: [allgemein], components: [button]})) return;
   if(!("🔴 〢 User Report").includes(), await channel.send({embeds: [allgemein], components: [button]})) return;
   if(!("📙 〢 Beitritt der Company").includes(), await channel.send({embeds: [allgemein], components: [button]})) return;
   if(!("📩 〢 Allgemeiner Support").includes(), await channel.send({embeds: [allgemein], components: [button]})) return;
    

//"📩 Allgemeiner Support", "📌 Anfragen auf Partnerschafften", "🔴 User Report", 📙 Beitritt der Company

      //if(!["📩 Allgemeiner Support"].includes(), channel.send({embeds: [allgemein]},));   
      
   
      /*
      const partnerembed = new EmbedBuilder()
      .setTimestamp()
      .setTitle("📌 Anfragen auf Partnerschafften")
      .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
      .setDescription(`Willkommen im Anfrage auf Partnerschafft‘s Ticket. 
      Dieses Ticket wird  von der Leitung bearbeitet. 
      Beachten sie außerdem auch, dass ihr Server die Vorrausetzungen erfüllt, 
      die wir angegeben haben. Sollten sie diese erfüllen, **bewerben** sie ihren Server mit **mehreren**  Sätzen, 
      gute Rechtschreiben sowie Groß- und Kleinschreibung und Details.
      Schicken sie außerdem die Invite-Link hinein.`);

      const reportembed = new EmbedBuilder()
      .setTimestamp()
      .setTitle("📌 Anfragen auf Partnerschafften")
      .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
      .setDescription(`Willkommen im User Report. 
      Hier können sie einen User sowie einen Teamler reporten, der sich in ihrem Augen falsch benommen hat. Füllen sie dazu bitte folgende Vorlage aus: 
      
      **UserName**:(Bsp.Rune#0187) 
      **Was** ist vorgefallen? 
      **Wann** ist dies passiert? 
      **Ist** dies schon häufig vorgefallen? 
      **Gibt** es Zeugen/sonstiges? 
      **Haben** sie Beweise? 
      
      *Sollten sie wünschen, dass sie Anonym gegenüber der Person bleiben wollen, kann dies gerne so sein.* **Bitte dazu schreiben** 
      `)

      const companyembed = new EmbedBuilder()
      .setTimestamp()
      .setTitle("📌 Anfragen auf Partnerschafften")
      .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
      .setDescription(`Willkommen im Anfrage Ticket auf Beitritt unserer Company. 
      Sie haben Interesse, sich an unserer Company anzuschließen. Dabei haben sie sich bei uns gut genug informiert,
      damit sie wissen, was wir machen. Schicken sie einen Link zu ihrem Social Media Kanal und vereinbaren sie ein Gespräch mit uns.`)

/*
      switch(customId) {

        case "📩 〢 Allgemeiner Support":
    
    
        
            await  channel.send({embeds: [allgemein], components: [button]})
            return;
    
    
    
    
            case "📙 〢 Beitritt der Company":
    
                await  channel.send({embeds: [companyembed], components: [button]})
                return;
    
    
    
    
                case "🔴 〢 User Report":
                    
              await  channel.send({embeds: [reportembed], components: [button]}) 
                return;
    
    
    
    
    
                    case "📌 〢 Anfragen auf Partnerschafften":
                        
               await channel.send({embeds: [partnerembed], components: [button]})
                return;
    
    
        }

    */

  /*    
      
      //Hier return; wenn es nicht klappt!!

     // if(!guild.members.me.Permissions.has(MangeChannels))
       //interaction.reply({content: "Ich habe keine Permissions für this.", ephemeral: true});

       try {
        await guild.channels.create({name: `${member.user.username}-ticket${ticketId}`,
              type: ChannelType.GuildText,
            parent: ticketParent,
        permissionOverwrites: [
            {
                id: everyone,
                deny: [ViewChannel, SendMessages, ReadMessageHistory],

            },
            {
                id: member.id,
                allow: [ViewChannel, SendMessages, ReadMessageHistory],
            },

        ],
    }).then(async (channel) => {
        const newTicketSchema = await ticketSchema.create({
            GuildID: guild.id,
            MemberID: member.id,
            TicketID: ticketId,
            ChannelID: channel.id,
            Closed: false,
            Locked: false,
            Type: customId,
        });


       /*
       
        const button  = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('close').setLabel('Close ticket').setStyle(ButtonStyle.Primary).setEmoji('✉️'),
            new ButtonBuilder().setCustomId('lock').setLabel('Lock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔒'),
            new ButtonBuilder().setCustomId('unlock').setLabel('Unlock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔓'),
            new ButtonBuilder().setCustomId('claim').setLabel('Claim ticket').setStyle(ButtonStyle.Primary).setEmoji('📥')

        );
        */
      
/*
            switch (customId) {

            case "📩〢Allgemeiner Support":
              const allgemein = new EmbedBuilder()
      .setTimestamp()
      .setTitle("📩 Allgemeiner Support")
      .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
      .setDescription(
        ` Willkommen im allgemeinen Support.
      Sobald ein Teamler **Zeit** gefunden hat, wird ihnen geholfen. 
      Schildern sie uns währendes so **genau** wie Möglich ihr Anliegen. 
      Achten sie bitte auf ihre Art und Weise im Ticket. Halten sie sich an das Regelwerk. 
      **Tipps** zum Beschreiben des Anliegens: 
      
      **Was** ist passiert?
      **Wer** war beteiligt? 
      **Wo** ist es passiert?(Channel)
      
      Sie haben ein **Feedback** zu dem Teamler, der ihnen geholfen hat? 
      Gerne dürfen sie das in #1038215963071488080 schreiben oder direkt hier im Ticket. 
      Wir freuen uns über Lob, aber auch über sachliche Kritik.`
      )
      
    
        
            
                    await channel.send({embeds: [allgemein], components: [button]})
                     
                    break;
            case "📙〢Beitritt der Company":

              const companyembed = new EmbedBuilder()
              .setTimestamp()
              .setTitle("📌 Anfragen auf Partnerschafften")
              .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
              .setDescription(`Willkommen im Anfrage Ticket auf Beitritt unserer Company. 
              Sie haben Interesse, sich an unserer Company anzuschließen. Dabei haben sie sich bei uns gut genug informiert,
              damit sie wissen, was wir machen. Schicken sie einen Link zu ihrem Social Media Kanal und vereinbaren sie ein Gespräch mit uns.`)
        
        
                      await channel.send({embeds: [companyembed], components: [button]})
                    
                      break;    
            case "🔴〢User Report":

              const reportembed = new EmbedBuilder()
              .setTimestamp()
              .setTitle("📌 Anfragen auf Partnerschafften")
              .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
              .setDescription(`Willkommen im User Report. 
              Hier können sie einen User sowie einen Teamler reporten, der sich in ihrem Augen falsch benommen hat. Füllen sie dazu bitte folgende Vorlage aus: 
              
              **UserName**:(Bsp.Rune#0187) 
              **Was** ist vorgefallen? 
              **Wann** ist dies passiert? 
              **Ist** dies schon häufig vorgefallen? 
              **Gibt** es Zeugen/sonstiges? 
              **Haben** sie Beweise? 
              
              *Sollten sie wünschen, dass sie Anonym gegenüber der Person bleiben wollen, kann dies gerne so sein.* **Bitte dazu schreiben** 
              `)
        
             
                        
                      await channel.send({embeds: [reportembed], components: [button]}) 
                     
                     break;   
            case "📌〢Anfragen auf Partnerschafften":



              const partnerembed = new EmbedBuilder()
      .setTimestamp()
      .setTitle("📌 Anfragen auf Partnerschafften")
      .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1038212686703505509/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
      .setDescription(`Willkommen im Anfrage auf Partnerschafft‘s Ticket. 
      Dieses Ticket wird  von der Leitung bearbeitet. 
      Beachten sie außerdem auch, dass ihr Server die Vorrausetzungen erfüllt, 
      die wir angegeben haben. Sollten sie diese erfüllen, **bewerben** sie ihren Server mit **mehreren**  Sätzen, 
      gute Rechtschreiben sowie Groß- und Kleinschreibung und Details.
      Schicken sie außerdem die Invite-Link hinein.`);
                            
 
                  await channel.send({embeds: [partnerembed], components: [button]})
                     break;               
            };


*/
            
            //Du musst für jedes einzellne einen if(![]) einsetzen! "📩〢Allgemeiner Support", "📌〢Anfragen auf Partnerschafften", "🔴〢User Report", "📙〢Beitritt der Company"

/*


      
      await interaction.reply({content: "Succesfully created a ticket", ephemeral: true});
      
    }

    )
    
      } catch (err) {
        return console.log(err)
      }
}
}

*/

const {ChannelType, ButtonInteraction, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, PermissionFlagsBits} = require("discord.js");
const ticketSchema = require("../../Models/Ticket");
const { ticketParent, everyone } = require("../../config.json");


module.exports = {
    name: "interactionCreate",

    async execute(interaction) {
      const {guild, member, customId, channel } = interaction;
      const {ViewChannel, SendMessages, MangeChannels, ReadMessageHistory } = PermissionFlagsBits;
      const ticketId = Math.floor(Math.random() * 9000) + 1000;

      if (!interaction.isButton()) return;


      if(!["Germany", "English"].includes(customId)) return;

     // if(!guild.members.me.Permissions.has(MangeChannels))
       //interaction.reply({content: "Ich habe keine Permissions für this.", ephemeral: true});
       try {
        await guild.channels.create({name: `${member.user.username}-ticket${ticketId}`,
              type: ChannelType.GuildText,
            parent: ticketParent,
        permissionOverwrites: [
            {
                id: everyone,
                deny: [ViewChannel, SendMessages, ReadMessageHistory],

            },
            {
                id: member.id,
                allow: [ViewChannel, SendMessages, ReadMessageHistory],
            },

        ],
    }).then(async (channel) => {
        const newTicketSchema = await ticketSchema.create({
            GuildID: guild.id,
            MemberID: member.id,
            TicketID: ticketId,
            ChannelID: channel.id,
            Closed: false,
            Locked: false,
            Type: customId,
        });

        const bildembed = new EmbedBuilder()
        .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1036008587031498872/Gif_Ayrma_Cubugu_SynexCreative_5.gif`);


        const embed = new EmbedBuilder()
        .setTitle(`${guild.name} - Ticket: ${customId}`)
        .setDescription(`**Hallo ${member} unser Team | DE wird bei dir sein!**`)
        .setFooter({ text: `${ticketId}`, iconURL: member.displayAvatarURL({dynamic: true}) })
        .setImage(`https://cdn.discordapp.com/attachments/1000138646390853692/1036008587031498872/Gif_Ayrma_Cubugu_SynexCreative_5.gif`)
        .setTimestamp();


        const button  = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('close').setLabel('Close ticket').setStyle(ButtonStyle.Primary).setEmoji('✉️'),
            new ButtonBuilder().setCustomId('lock').setLabel('Lock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔒'),
            new ButtonBuilder().setCustomId('unlock').setLabel('Unlock ticket').setStyle(ButtonStyle.Primary).setEmoji('🔓'),
            new ButtonBuilder().setCustomId('claim').setLabel('Claim ticket').setStyle(ButtonStyle.Primary).setEmoji('📥')

        );

        channel.send({
            content: "@1040962523500912670",
            embeds: ([embed]),
            components: [
                button
            ]
        });

        interaction.reply({content: "Succesfully created a ticket", ephemeral: true});
      });
  } catch (err) {
    return console.log(err)
  }
    }
}

//const { ButtonBuilder } = require("@discordjs/builders");