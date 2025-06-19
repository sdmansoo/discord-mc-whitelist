import { Client } from "discord.js";

import { credentials, discordServer } from "./config";
import { deployCommands } from "./deployCommands";
import { commands } from "./commands";

console.log("🤖 Starting discord bot...");

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log("🤖 Discord bot is ready!");
});

client.on("guildCreate", async (guild) => {
  await deployCommands({guildId: guild.id});
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

deployCommands({guildId: discordServer.id});
client.login(credentials.token);