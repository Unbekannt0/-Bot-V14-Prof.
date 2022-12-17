const {Client, EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction, Embed} = require("discord.js");
const translate = require("@iamtraction/google-translate") // npm i  @iamtraction/google-translate

module.exports = {
  data: new SlashCommandBuilder()
  .setName("translate-sth")
  .setDescription("your text")
  .addStringOption((option) =>
  option.setName("text")
  .setDescription("your text to tanslate")
  .setRequired(true))
  .addStringOption((option) =>
  option.setName("language")
  .setDescription("The language to translate")
  .addChoices(
    { name: "English", value: "english" },
    { name: "Germany", value: "german"},
    { name: "French", value: "french" },
    { name: "Russian", value: "russian" },
    ).setRequired(true)),

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

    async execute(interaction, client) {
      const {options} = interaction

      const text = options.getString("text")
      const language = options.getString("language")

      switch (language) {
        case "english": {
          const translated = await translate(text, { to: 'en'})
          send_translated(text, translated.text, interaction, client)
        }
          
          break;

          case "german": {
            const translated = await translate(text, { to: 'de'})
            send_translated(text, translated.text, interaction, client)
          }
          
            break;
            case "french": {
              const translated = await translate(text, { to: 'fr'})
              send_translated(text, translated.text, interaction, client)
            }
          
              break;
              case "russian": {
                const translated = await translate(text, { to: 'ru'})
                send_translated(text, translated.text, interaction, client)
              }
          
                break;


      }
    }
}

function send_translated(text, translated, interaction, client) {
  const Response = new EmbedBuilder()
  .setColor("Random")
  .setTitle("Translator (your title)")
  .addFields(
    { name: "Message", value: text, inline: true},
  
    { name: "Translated", value: translated, inline: true}
    ).setFooter({text: `Requested by ${interaction.member.user.tag}`, iconURL: interaction.member.user.displayAvatarURL()})

    interaction.channel.send({ embeds: [Response]})
    interaction.reply({content: `Successfully translated message!`, ephemeral: true})
}
