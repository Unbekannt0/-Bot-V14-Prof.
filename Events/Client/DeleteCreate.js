
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes("delta! of")) {
      await setTimeout(() => { channel.delete() }, 4500);

      message.channel.send({content: "``⚠️THIS CHANNEL WILL BE DELETED⚠️``"})
      message.react('⚠️');



    
        

      }
    }
}