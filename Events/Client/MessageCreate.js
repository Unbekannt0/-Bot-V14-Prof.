
const {EmbedBuilder} = require("discord.js")
module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    if(message.content.includes("https://") || message.content.includes("https://") || message.content.includes("https://discord.gg") || message.content.includes("Nigga") || message.content.includes("nigga")
    || message.content.includes("Du Hurensohn") || message.content.includes("du hurensohn") || message.content.includes("du hs") || message.content.includes("DU HS") || message.content.includes("Du Hs")
    || message.content.includes("Du hs")  || message.content.includes("Fuck you")  || message.content.includes("fuck you")  || message.content.includes("fuck u")  || message.content.includes("Fuck u")  || message.content.includes("FUCK YOU")) {
      message.delete();


      const embed = new EmbedBuilder()
      .setTitle(`**REGEL VERSTOSS**`)
      .addFields(
      {
        name: `${message.author} hat ein Message gesendet, was hier eigentlich nicht erlaubt ist!` , value: `@RzYm Bitte sag ihn, dass er das nicht mehr machen darf (oder soll ich?) ;)`  
      },
      {
        name: `ADMIN OR MODS`, value: `**Moderatoren -/innen kümmern sich schon um dich ${message.author} 👋**`
      }
      )

      message.channel.send({content: `${message.author}... **warum???...**`})
      message.channel.send({embeds: [embed], emphermal: true})

    }
  }
}



