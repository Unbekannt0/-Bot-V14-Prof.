
module.exports = {
  name: "messageCreate",
  async execute(message) {
    const {channel, guild, options} = message;
    if (message.author.bot) return;

    if(message.content.includes("!nukemyworld")) {
      message.channel.send({content: "``Hallo lord... /§\ I WILL NUKE EVERYTHING FOR YOU!!!😈😈😈 ``"})

    
        
      
      }
    }
 }
