//THIS SHIT IS DUNE BUT WHY THE F:: DOES THIS SHIT NEEDs AN INTERACTION:: BUT I FIXED IT;) use your one words or text etc.....

const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Colors} = require("discord.js")


module.exports = {
  data:  new SlashCommandBuilder() 
  .setName("warn")
  .setDescription("Warns a member")
  .addUserOption((option) =>
  option.setName("user")
  .setDescription("The user you want to warn")
  .setRequired(true)
  )
  .addStringOption((option) =>
  option
  .setName("reason")
  .setDescription("The reason for the warn")
  .setRequired(true)
  )

	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),





  async execute(interaction) {
    const {channel, client, options,
      Infraction} = interaction;



    const user = options.getMember("user")
    const reason = options.getString("reason")

//The log channel-ID for the warn logs********** await client.channels.cache.get("ID")
const logs = await client.channels.cache.get("1033067375156797521")


			const Embed = new EmbedBuilder()
				.setColor(Colors.DarkButNotBlack)
				.setAuthor({
					name: `${user} wurde wegen *${reason}* gewarnt!`,
					iconURL: `${user.displayAvatarURL({
						size: 4096,
						dynamic: true,
					})}`,
				})
				.setDescription(`The warn wurde von: <@${interaction.member.id}> gemacht. **LOL**`)
				.setTimestamp()


				const userembed = new EmbedBuilder()
				.setTitle("**Warn!**")				
				.setColor(Colors.DarkButNotBlack)
				.setTimestamp()
				.setDescription(`**LOL** Du wurdest einfach wegen ${reason} gewarnt. *Opfer*`)

				const meembed = new EmbedBuilder()
				.setTitle(`Einen Warn wurde von <@${interaction.member.id}> ausgeführt **LOL**...`)
				.setColor("DarkNavy")
				.setAuthor({
					name: `${reason}`, value: `DIESER HURENSOHN HAT ES BEKOMMEN ${user} **/voll der SCHWARZE/**`
				})


				user.send({embeds: [userembed]});

				console.log(user);


				await interaction
				.reply({
					embeds: [Embed],
				})
				.catch((err) => {})
				
				
				return logs
				.send({
					embeds: [Embed],
				})
				.catch((err) => {})


				




				

      }
    }