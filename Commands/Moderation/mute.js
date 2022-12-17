const { Client, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const ms = require("ms");

module.exports = {
    data: new SlashCommandBuilder()
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setName("mute")
        .setDescription("Mute a member from the guild.")
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Select the user you wish to mute.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("time")
                .setDescription("How long should the mute last?")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("What is the reason of the mute?")
        ),

    async execute(interaction) {
        const { guild, options} = interaction;


        const user = options.getUser("target");
        const member = guild.members.cache.get(user.id);
        const time = options.getString("time");
        const convertedTime = ms(time);
        const reason = options.getString("reason") || "No reason provided";
        const me = interaction.guild.mebers




        const meembed  = new EmbedBuilder()
        .setTitle("Member mute")
        .setDescription(`*Du wolltest ${interaction.guild.id} muten... jz hat er es aber bei dir gemacht 📜 wegen ${reason}*`)
        .setAuthor(`@${interaction.guild.id}`)
        .setColor("Random")
        .setThumbnail(`https://i.pinimg.com/originals/b0/29/93/b029935a16271600a0669ab5053f2df4.gif`)
        .setTimestamp();
    

        
        if(user.id === "1023176164233183263") {
            return await interaction.reply({
              content: "*I can't mute myself...*"
            })
            .catch((err) => {})
          }


        const errEmbed = new EmbedBuilder()
            .setDescription('Something went wrong. Please try again later.')
            .setColor(0xc72c3b)

        const succesEmbed = new EmbedBuilder()
            .setTitle("**:white_check_mark: Muted**")
            .setDescription(`Succesfully muted ${user}.`)
            .addFields(
                { name: "Reason", value: `${reason}`, inline: true },
                { name: "Duration", value: `${time}`, inline: true }
            )
            .setColor(0x5fb041)
            .setTimestamp();





        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true }); // this if statement is optional (but recommended)

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ModerateMembers))
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        if (!convertedTime)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        try {
            await member.timeout(convertedTime, reason);

            interaction.reply({ embeds: [succesEmbed], ephemeral: true });
        } catch (err) {
            console.log(err);
        } 


        user.send({embeds: [meembed] });

        console.log(user) 
    }
 } 
