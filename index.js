require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const setupCommand = require("./setup");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "setup") {
    await setupCommand.execute(interaction);
  }
});

client.login(process.env.TOKEN);
