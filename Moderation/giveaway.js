const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const ms = require('ms');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('All of the giveaway utilities you need')
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers)
        .addSubcommand((subCommand) =>
            subCommand
                .setName('start')
                .setDescription('Starts the giveaway')
                .addStringOption((option) =>
                    option
                        .setName('reward')
                        .setDescription('The reward of the giveaway')
                        .setRequired(true))
                .addStringOption((option) =>
                    option
                        .setName('duration')
                        .setDescription('The duration of the giveaway')
                        .setRequired(true))
                .addIntegerOption((option) =>
                    option
                        .setName('winners')
                        .setDescription('The number of winners.')
                        .setRequired(true).setMinValue(1))
                .addUserOption((option) =>
                    option
                        .setName('host')
                        .setDescription('The user who is hosting the giveaway'))
                .addAttachmentOption((option) =>
                    option
                        .setName('thumbnail')
                        .setDescription('Add a thumbnail to the giveaway embed.')
                ))
        .addSubcommand((subCommand) =>
            subCommand
                .setName('reroll')
                .setDescription('Picks a new giveaway winner')
                .addStringOption((option) =>
                    option
                        .setName('message-id')
                        .setDescription('The message ID of the giveaway you want to reroll.')
                        .setRequired(true)
                ))
        .addSubcommand((subCommand) =>
            subCommand
                .setName('pause')
                .setDescription('Pauses an ongoing giveaway')
                .addStringOption((option) =>
                    option
                        .setName('message-id')
                        .setDescription('The message ID of the giveaway you want to pause.')
                        .setRequired(true)
                ))
        .addSubcommand((subCommand) =>
            subCommand
                .setName('resume')
                .setDescription('Resumes a paused giveaway')
                .addStringOption((option) =>
                    option
                        .setName('message-id')
                        .setDescription('The message ID of the giveaway you would like to resume.')
                        .setRequired(true)))
        .addSubcommand((subCommand) =>
            subCommand
                .setName('end')
                .setDescription('Ends a giveaway.')
                .addStringOption((option) =>
                    option
                        .setName('message-id')
                        .setDescription('The message ID of the giveaway you would like to resume.')
                        .setRequired(true)))
        .addSubcommand((subCommand) =>
            subCommand
                .setName('cancel')
                .setDescription('Stops a giveaway.')
                .addStringOption((option) =>
                    option
                        .setName('message-id')
                        .setDescription('The message ID of the giveaway that you want to cancel.')
                        .setRequired(true))),
}