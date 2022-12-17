const {SlashCommandBuilder, EmbedBuilder, Message, version} = require("discord.js");
let os = require("os");
let cpuStat = require("cpu-stat");


module.exports = {
  data: new SlashCommandBuilder()
  .setName("statusinfo")
  .setDescription("Status about you and the bot"),
  async execute(interaction) {
    const { guild, client, options,  } = interaction;




const embed = new EmbedBuilder()
.setColor("Aqua")
.setAuthor({
  name: client.user.username,
  iconURL: client.user.displayAvatarURL({ dynamic: true }),
})
.setTitle("__**Stats:**__")
.addFields([
  {
    name: `⏳ Memory Usage`,
    value: `\`${(
      process.memoryUsage().heapUsed /
      1024 /
      1024
    ).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(
      2
    )} MB\``,
  },
  {
    name: `⌚️ Uptime`,
    value: `<t:${Math.floor(
      Date.now() / 1000 - client.uptime / 1000
    )}:R>`,
  },
  {
    name: `📁 Users`,
    value: `\`${client.guilds.cache.reduce(
      (acc, guild) => acc + guild.members.memberCount,
      0
    )} \``,
    inline: true,
  },
  {
    name: `📁 Servers`,
    value: `\`${client.guilds.cache.size}\``,
    inline: true,
  },
  {
    name: `📁 Channels`,
    value: `\`${client.channels.cache.size}\``,
    inline: true,
  },
  {
    name: `👾 Discord.JS`,
    value: `\`v${version}\``,
    inline: true,
  },
  {
    name: `🤖 Node`,
    value: `\`${process.version}\``,
    inline: true,
  },
  {
    name: `🏓 Ping`,
    value: `\`${client.ws.ping}ms\``,
    inline: true,
  },
  {
    name: `🤖 CPU`,
    value: `\`\`\`md\n${
      os.cpus().map((i) => `${i.model}`)[0]
    }\`\`\``,
  },
  {
    name: `🤖 CPU usage`,
    value: `\`50%\``,
    inline: true,
  },
  {
    name: `🤖 Arch`,
    value: `\`${os.arch()}\``,
    inline: true,
  },
  {
    name: `💻 Platform`,
    value: `\`\`${os.platform()}\`\``,
    inline: true,
  },
])


await interaction.reply({embeds: [embed]})
 }
}

//    client.embed(message, `Uptime :: <t:${Math.floor(Date.now() / 1000 - client.uptime / 1000)}:R>`);