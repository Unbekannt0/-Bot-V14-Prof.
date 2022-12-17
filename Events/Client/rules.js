const {EmbedBuilder} = require("discord.js")
module.exports = {

name: "messageCreate",
async execute(message) {
  const {channel, guild, options} = message;
  if (message.author.bot) return;

  if(message.content.includes('!Rules')) {



const embed = new EmbedBuilder()
.setTitle(`**RULES**`)
.setAuthor({ name: 'RULES',iconURL: 'https://cdna.artstation.com/p/assets/images/images/051/585/962/original/maddie_creates-poro-icon.gif?1657663488'})
.addFields(
{
  name: `Hallo  ${message.author}  ! Du willst wissen was die **!Rules** sind?` , value: `Ich erkläre es dir sehr schnell.`  
},
{
  name: `1§`, value: `**If you have me as your bot server, then I will not be able to work!**`
},
{
  name: `2§` , value: `I am your **OWNER!**`  
},
{
  name: `3§` , value: `**I can do what I want!**`  
},
{
  name: `4§` , value: `**Anything with racism is not allowed!**`  
},
{
  name: `5§` , value: `**Follow the rules of the server!**`  
},
{
  name: `6§` , value: `**Cats are better then dogs!**`  
},
{
  name: `7§` , value: `**69 is my favorite number;)**`  
},
{
  name: `8§` , value: `**Your an EMO**` , inline 
},

)
.setTimestamp()
.setColor("DarkGreen")

message.channel.send({embeds: [embed]})
}
}
}