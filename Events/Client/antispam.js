const { Client, Message, EmbedBuilder, CommandInteraction } = require("discord.js")
const antispamSchema = require("../../Schemas/AntiSpam")
const map = new Map()

module.exports = {
    name: "messageCreate",

    /**
   //  */ //@param {Message} message
     
    async execute(message) {

        if (message.author.bot || !message.guild) return

        let channelData

        try {

            channelData = await antispamSchema.findOne({ Guild: message.guild.id })

            if (!channelData) {
                channelData = await antispamSchema.create({ Guild: message.guild.id })
            }
        } catch (err) {
            console.log(err)
        }

        if (channelData.Channels.some(chn => chn === message.channel.id)) {

            if (map.has(message.author.id)) {

                const data = map.get(message.author.id)
                const { lastmsg, timer } = data
                const diff = message.createdTimestamp - lastmsg.createdTimestamp
                let msgs = data.msgs

                if (diff > 1000) {

                    clearTimeout(timer)
                    data.msgs = 1
                    data.lastmsg = message

                    data.timer = setTimeout(() => {

                        map.delete(message.author.id)
                    }, 5000)

                    map.set(message.author.id, data)
                } else {

                    const reason = "Spamming"

                    ++msgs

                    if (parseInt(msgs) === 5) {

                        const member = message.guild.members.cache.get(message.author.id)

                        member.timeout(1 * 60 * 1000, reason).catch(err => {

                            if (err) {
                                return console.log(err)

                            }
                        })
                        message.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor("DarkRed")
                                .setDescription(`✅ - **${message.author}** has been timed out for \`spamming!\``)
                            ]
                        })
                    } else {
                        data.msgs = msgs
                        map.set(message.author.id, data)
                    }
                }
            } else {

                let remove = setTimeout(() => {
                    map.delete(message.author.id)
                }, 5000)

                map.set(message.author.id, {
                    msgs: 1,
                    lastmsg: message,
                    timer: remove,
                })
            }
        } else return
    }
}