const {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("addroletest")
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
  .setDescription("Adds a role to a member")
  .addUserOption((option) =>
  option
  .setName("user")
  .setDescription("The user you want to give the role")
  )
  .addRoleOption((option) =>
  option 
  .setName("role")
  .setDescription("The role you want to add")
  ),





async execute(interaction) {
  const {guild, options, } = interaction;


const role = options.getRole('role');
const user = options.getUser('user');

const success = new EmbedBuilder()
.setTitle("**ROLE**")
.setColor("Random")
.setDescription(`Role wurde erfolgreich hinzugefügt auf ... ${user}`)
.setImage(`https://miro.medium.com/max/720/1*Q30M9q5aJOKkxvle_DDhIA.png`)




await interaction.reply({embeds: [success]});

user.roles.add(role); 


}

}