const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember, Embed } = require("discord.js");
const Schema = require("../../Models/Leave");



module.exports = {
  name: "guildMemberLeave",
  async execute(member) {
    Schema.findOne({Guild: member.guild.id}, async (err, data) => {
      if (!data) return;
      let channel = data.Channel;
      let Msg = leaveEmbed || " ";


      const {user, guild} = member;
      const leaveChannel = member.guild.channels.cache.get(data.Channel);

    const leaveMessage = `Bye ${member} we will miss you:(\n\nAccount Created: <t:${parseInt(
      user.createdTimestamp / 1000
    )}:R>\nTotal Members: \`${guild.memberCount}\``;

    const leaveEmbed = new EmbedBuilder()
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
      .setDescription(leaveMessage)
      .setColor(0x037821)
      .setThumbnail(user.displayAvatarURL())
      .setFooter({ text: user.id })
      .setTimestamp();

    leaveChannel.send({ embeds: [leaveEmbed] });
    user.send(leaveMessage)
  })

 }
}


/*
module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        Schema.findOne({Guild: member.guild.id}, async (err, data) => {
            if (!data) return;
            let channel = data.Channel;
            let Msg = data.Msg || " ";
            let Role = data.Role;

            const {user, guild} = member;
            const welcomeChannel = member.guild.channels.cache.get(data.Channel);

            const welcomeEmbed = new EmbedBuilder()
            .setTitle("**New member!**")
            .setDescription(data.Msg)
            .setColor(0x037821)
            .addFields({name: 'Total members', value: `${guild.memberCount}`})
            .setTimestamp();

            welcomeChannel.send({embeds: [welcomeEmbed]});
            member.roles.add(data.Role);
        })
    }
}
*/