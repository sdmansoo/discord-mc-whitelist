import dotenv from 'dotenv';
import { ClientCredentials, DiscordServer } from '.';

dotenv.config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  console.error("Missing credentials from .env!")
  throw new Error("Missing credentials from .env!");
}

export const credentials: ClientCredentials = {
  token: DISCORD_TOKEN,
  id: DISCORD_CLIENT_ID
}

const SERVER_ID = process.env.SERVER_ID;
if(!SERVER_ID) {
  console.error("Missing server details from .env!");
  throw new Error("Missing server details from .env!");
}

export const discordServer: DiscordServer = {
  id: SERVER_ID
}
