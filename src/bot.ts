import { Client } from "discord.js";
import { loadCommand } from "./commands";
import TestCommand from "./commands/TestCommand";
import loadEvent from "./events";
import MessageEvent from "./events/MessageEvent";
import ReadyEvent from "./events/ReadyEvent";

const client: Client = new Client()

async function runBot() {
    loadEvent(client, new ReadyEvent());
    loadEvent(client, new MessageEvent());
    loadCommand(new TestCommand());

    client.login(process.env.BOT_TOKEN);
}

export { runBot }