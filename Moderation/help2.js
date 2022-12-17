const {
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
  ButtonBuilder, 
  ButtonStyle,
  RateLimitError,
} = require('discord.js');

function Accuracy() {
  var rating = Math.floor((Math.random() * 50) + 50);
  return rating;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("security")
    .setDescription("Shows a list of all coammnds."),
  async execute(interaction, client) {
    
    const emojis = {
      developer: "📝",
      fun: "🤣",
      moderation: "🛠️",
      general: "📌",
    };

    const directories = [
      ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
    ];

    const formatString = (str) =>
      `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const categories = directories.map((dir) => {
      const getCommands = interaction.client.commands
        .filter((cmd) => cmd.folder === dir)
        .map((cmd) => {
          return {
            name: cmd.data.name,
            description:
              cmd.data.description ||
              "There is no description for this command.",
          };
        });

      return {
        directory: formatString(dir),
        commands: getCommands,
      };
    });

    const embed = new EmbedBuilder()
    // .setDescription("Vyberte prosím kategorii v menu.");
    .setTitle(`Projekt Home-page`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/1003985217008181282/c4f70b2ff891e5137e07f84781461764.webp?size=512`)
    .setColor('#5966F3')
    .setDescription(`
    Hey there ${interaction.user}, your help has arrived!

    TheAdmin is fully moderation bot with lots of features and high-quality moderation! But @RyZm got another one too😉

    **TheAdmin's command categories**

    <:Discord_icon:1037757899545522227>  General
    <:Discord_icon:1037757899545522227>  Moderation
    <:Discord_icon:1037757899545522227>  Fun

    Choose a category below for General, Moderaion and Fun commands

    [Invite Me](https://discord.com/api/oauth2/authorize?client_id=1023176164233183263&permissions=8&scope=bot%20applications.commands) • [Support Server](https://discord.gg/2aNyEVKeRb)
    `)

    const components = (state) => [
      new ActionRowBuilder().addComponents(
        new SelectMenuBuilder()
          .setCustomId("help-menu")
          .setPlaceholder("Nothing selected.")
          .setDisabled(state)
          .addOptions(
            categories.map((cmd) => {
              return {
                label: cmd.directory,
                value: cmd.directory.toLowerCase(),
                description: `Display all commands form category ${cmd.directory}.`,
                emoji: emojis[cmd.directory.toLowerCase() || null],
              };
            })
          )
      ),
    ];

    const initialMessage = await interaction.reply({
      ephemeral: false,
      embeds: [embed],
      components: components(false),
    });

    const filter = (interaction) =>
      interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      componentType: ComponentType.SelectMenu,
    });

    collector.on("collect", (interaction) => {
      const [directory] = interaction.values;
      const category = categories.find(
        (x) => x.directory.toLowerCase() === directory
      );
      
      const mappedCommands = category.commands.map((cmd) => {
            return `\`${cmd.name}\``
          }
        );
        
      const stringedCommands = mappedCommands.join(', ');

      const categoryEmbed = new EmbedBuilder()
        .setTitle(`${formatString(directory)} commands`)
        .setDescription(stringedCommands)
        .setColor('#5966F3');

      interaction.update({ embeds: [categoryEmbed] });
    });

    collector.on("end", () => {
      initialMessage.edit({ components: components(true) });
      console.error()
    });
  },
};