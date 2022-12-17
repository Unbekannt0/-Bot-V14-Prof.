const { 
  Client,
  GatewayIntentBits, 
  Partials, 
  Collection, 
  ActivityType, 
  PermissionFlagsBits,
  PermissionsBitField,
  REST,
  Routes,

  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  InteractionType,
  bold,
  italic,
  codeBlock} = require('discord.js');
const { ChannelType } = require("discord.js");
const colors = require('colors');
const { GiveawaysManager } = require('discord-giveaways');

const projectVersion = require('./package.json').version || "Unknown";


const {Guilds, GuildMembers, GuildMessages, MessageContent, GuildVoiceStates} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Channel} = Partials;


const {loadEvents} = require('./Handlers/eventHandler.js');
const {loadCommands} = require('./Handlers/commandHandler.js');

//const {loadLogs} = require('./Handlers/handleLogs')



const client = new Client({
  intents: [Guilds, GuildMembers,  GuildVoiceStates, GuildMessages, MessageContent,Object.keys(GatewayIntentBits),GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences],
  allowedMentions: { parse: ["users"] },
  partials: [User, Message, GuildMember, ThreadMember,Object.keys(Partials),Partials.User, Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction],
});

client.commands = new Collection();
client.config = require('./config.json');

client.on('interactionCreate', async interaction => {
	if (interaction.isChatInputCommand()) {
		// command handling
	} else if (interaction.isAutocomplete()) {
		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}
	}
});


const manager = new GiveawaysManager(client, {
  storage: './giveaways.json',
  default: {
      botsCanWin: false,
      embedColor: "Random",
      embedColorEnd: '#9fef14',
      reaction: '🎉'

  }
});
client.giveawaysManager = manager
client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
  winners.forEach((member) => {
      member.send(`**Congratulations ${member.user.username}, you've won ${giveaway.prize}!**`);
  })
});


client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
    //handleLogs (client);
    client.user.setPresence({ status: 'idle' });
    client.user.setUsername(`TheAdmin`)
    client.user.setActivity('The Admin', { type: ActivityType.Streaming, url: "https://www.twitch.tv/ashrlay"  });




		
		


});





const asciiText = `
███╗░░░███╗░█████╗░██████╗░███╗░░░███╗░█████╗░██╗██╗░░░░░
████╗░████║██╔══██╗██╔══██╗████╗░████║██╔══██╗██║██║░░░░░
██╔████╔██║██║░░██║██║░░██║██╔████╔██║███████║██║██║░░░░░
██║╚██╔╝██║██║░░██║██║░░██║██║╚██╔╝██║██╔══██║██║██║░░░░░
██║░╚═╝░██║╚█████╔╝██████╔╝██║░╚═╝░██║██║░░██║██║███████╗
╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝╚══════╝
`.underline.blue + `Version ${projectVersion} By P R O F .#7524.
`.underline.cyan;

console.log(asciiText);










