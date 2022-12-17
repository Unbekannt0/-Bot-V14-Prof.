const { EmbedBuilder, SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("It's a simple menu command"),

    async execute(interaction, client) {

     const embed = new EmbedBuilder()
        .setTitle('Menu')
         .setDescription("It's a simple menu command.")
       .setThumbnail(interaction.guild.iconURL())
    .setColor("Random")
        .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})
        
    const embed1 = new EmbedBuilder()
    .setTitle('○ Testing')
     .setColor("Random")
      .setDescription(`Testing`)
        .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})
      
    const embed2 = new EmbedBuilder()
      .setTitle('○ Testing')
      .setDescription(`Testing`)
      .setColor("Random")
        .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})
      
      const embed3 = new EmbedBuilder()
      .setTitle('○ Testing')
       .setDescription(`Testing`)
        .setColor("Random")
        .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})
      const embed4 = new EmbedBuilder()
        
      .setTitle('○ Testing')
      .setDescription(`Testing`)
      .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})

        const embed5 = new EmbedBuilder()
        
      .setTitle('○ Testing')
      .setDescription(`Testing`)
        .setColor("Random")
        .setFooter({text: `DanielBot | Development`, iconURL: client.user.displayAvatarURL()})
 
let rowmenu = new ActionRowBuilder()
         .addComponents(
           new SelectMenuBuilder()
           .setCustomId('menu2')
           .setPlaceholder('Menu list')
           .setMinValues(1)
           .setMaxValues(1)
           .addOptions([
             {
               label: 'Testing',
               value: 'option1',
               description: 'Click me!',
             },
             {
               label: 'Testing',
               value: 'option2',
               description: 'Click me!',
             },
             {
              label: 'Testing',
              value: 'option3',
              description: 'Click me!',
            },
             {
              label: 'Testing',
              value: 'option4',
              description: 'Click me!',
            },
             {
               label: "Testing",
                value: 'option5',
               description: 'Click me!',
             },
            {
               label: "Home",
               value: 'option',
               description: 'Click me!',
            },
           ])
         )

   
        
  const MESSAGE = await interaction.reply({embeds : [embed], components : [rowmenu], ephemeral: true });
  const filter = ( button ) => button.user.id === interaction.user.id 
  const collector = MESSAGE.createMessageComponentCollector();

    collector.on('collect', async (b) => {

        if(b.values[0] == "option") {
            await b.update({embeds : [embed], components : [rowmenu], ephemeral: true });
            

        }

       if(b.values[0] == "option1") {
            await b.update({embeds : [embed1], components : [rowmenu], ephemeral: true });
            

        }//

       if(b.values[0] == "option2") {
            await b.update({embeds : [embed2], components : [rowmenu], ephemeral: true });
            

        }

        if(b.values[0] == "option3") {
          await b.update({embeds : [embed3], components : [rowmenu], ephemeral: true });
          

      }

       if(b.values[0] == "option4") {
            await b.update({embeds : [embed4], components : [rowmenu], ephemeral: true });
            

        }
       if(b.values[0] == "option5") {
            await b.update({embeds : [embed5], components : [rowmenu], ephemeral: true });
            

        }

  
    })
  },
};