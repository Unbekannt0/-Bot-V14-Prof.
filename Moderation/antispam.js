const { Client, EmbedBuilder, CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } = require("discord.js")
const antiSpamSchema = require("../../Schemas/AntiSpam")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("antispam")
    .setDescription("A full anti-spam system")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand((options) =>
    options.setName("add")
    .setDescription("Adds a channel to the anti-spam system")
    .addChannelOption((options) =>
    options.setName("channel")
    .setDescription("Select a channel")
    .setRequired(true)
    )
    )
    .addSubcommand((options) =>
    options.setName("remove")
    .setDescription("Removes a channel to the anti-spam system")
    .addChannelOption((options) =>
    options.setName("channel")
    .setDescription("Select a channel")
    .setRequired(true)
    )
    )
    .addSubcommand((options) =>
    options.setName("list")
    .setDescription("Shows all the commands for the anti-spam system")
    ),
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {

    const { options, guild, channel } = interaction

    switch (options.getSubcommand()) {

        case "add": {

            const channel = options.getChannel("channel")

            let data

            try {

                data = await antiSpamSchema.findOne({ Guild: guild.id })

                if (!data) {

                    data = await antiSpamSchema.create({ Guild: guild.id })

                }

            } catch (err) {
                console.log(err)
            }

            if (data.Channels.includes(channel.id)) return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setColor("Blue")
                    .setDescription(`❌ - ${channel} is already added to anti-spam system!`)
                ],
                ephemeral: true
            })

            data.Channels.push(channel.id)
            await data.save()

            interaction.reply({
                embeds:  [
                    new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`✅ - ${channel} is successfully added to anti-spam system!`)
                ]
            })
        }

        break;

        case "remove": {

            const channel = options.getChannel("channel")

            let data

            try {

                data = await antiSpamSchema.findOne({ Guild: guild.id })

                if (!data) {

                    data = await antiSpamSchema.create({ Guild: guild.id })

                }

            } catch (err) {
                console.log(err)
            }

          if (!data.Channels.includes(channel.id)) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("Blue")
                .setDescription(`❌ - ${channel} is not even added to anti-spam system!`)
            ]
          })

          let array = data.Channels

          array = array.filter(x => x !== channel.id)

          data.Channels = array

          await data.save()

            interaction.reply({
                embeds:  [
                    new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`✅ - ${channel} is successfully deleted from anti-spam system!`)
                ]
            })
        }

        break;

        
        case "list": {

            let data = await antiSpamSchema.findOne({ Guild: guild.id })
            let channel

            if (!data) {

                channel = "Not SET YET"

            } else {

                channel = data.Channels

            }

            let channels

            if (channel !== "NOT SET YET") {

                channels = channel.map((c) => guild.channels.cache.get(c)).join(", ")

            } else {

                channels = "NOT SET YET"

            }

            interaction.reply({
                embeds:  [
                    new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`✅ - The channels set in anti-spam system are: ${channels}`)
                ]
             })

        }

        break;
    }

  }
}