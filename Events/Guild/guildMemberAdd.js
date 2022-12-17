const {EmbedBuilder} = require("@discordjs/builders");
const {GuildMember, Embed, InteractionCollector, AttachmentBuilder, Client, Events, GatewayIntentBits} = require("discord.js");
const Schema = require("../../Models/Welcome");

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        Schema.findOne({Guild: member.guild.id}, async (err, data) => {
            if (!data) return;
            let channel = data.Channel;
            let Msg = data.Msg || " ";
            let Role = data.Role;

            const {user, guild} = member;
            const welcomeChannel = member.guild.channels.cache.get(data.Channel);
            const Canvas = require('@napi-rs/canvas');
            const client = new Client({ intents: [GatewayIntentBits.Guilds] });
            const canvas = Canvas.createCanvas(700, 250);
          
            const context = canvas.getContext('2d');

            const background = await Canvas.loadImage('https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?w=1480&t=st=1667683195~exp=1667683795~hmac=821dc52c365b76a60eacc3350cc86ce23e708724d8bdbb9f1383f94d05ead140');
        
            // This uses the canvas dimensions to stretch the image onto the entire canvas
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            // Use the helpful Attachment class structure to process the file for you
        
 






            const welcomeEmbed = new EmbedBuilder()
            .setTitle("**New member! **")
            .setDescription(`d${data.Msg}   :::  ${member.name}`)
            .setColor(0x037821)
            .addFields({name: 'Total members', value: `${guild.memberCount}`})
            .setTimestamp()




            welcomeChannel.send({embeds: [welcomeEmbed], context: background });
            member.roles.add(data.Role);


            client.on(Events.ClientReady, () => {
                console.log('your fucking canvas is ready!');
    });
         });

        }
    }
