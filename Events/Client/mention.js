const {EmbedBuilder, Colors, Client} = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
if(message.author.bot || !message.guild || message.channel.type === 'dm') return;

/**
 * @param {Client} client
 */
if(message.content === `<@${client.user.id}>`) {
  const e = new EmbedBuilder()
  .setTitle(`Displaying information for ${client.user.username}}`)
  .setFields(
    { name: `**Creator:**`, value: `\`\`\`Prof.#4438\`\`\`` },
    { name: `**Creator ID:**`, value: `\`\`\`763833414976929812\`\`\`` },
    { name: `**Bot ID:**`, value: `\`\`\`${client.user.id}\`\`\`` },
    { name: `**Ping**`, value: `\`\`\`${client.ws.ping}ms\`\`\`` },
   { name: `**Slash**`, value: `\`\`\`/help\`\`\`` },
  )
  .setThumbnail(client.user.displayAvatarURL())
  .setColor(Colors.DarkRed)

  message.channel.send({ embeds: [e] })
  
}}
}