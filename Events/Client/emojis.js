const { EmbedBuilder } = require("discord.js")

module.exports = {
	name: "emojiCreate",
	async execute(client, emoji) {
		const logs = await client.channels.cache.get("955948174894325782")

		const Embed = new EmbedBuilder()
			.setTitle("🆕 Emoji Created")
			.setDescription(
				`Emoji: <:${emoji.name}:${emoji.id}>\nID: **${emoji.id}**`
			)
			.setColor("Green")
			.setTimestamp()

		logs.send({
			embeds: [Embed],
		}).catch((err) => {
			console.log(err)
		})
	},
}