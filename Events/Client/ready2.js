module.exports = {
    name: "ready",
    once: true,
	async execute(client) {
console.log(`Logged to the client ${client.user.username}\n ${client.guilds.cache.size}`.blue);
	}};