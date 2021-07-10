import { Client } from "discord.js";
import DiscordEvent from './events/DiscordEvent';

export default function loadEvent(client: Client, event: DiscordEvent) {
    client.on(event.name, (...args) => { event.execute(client, ...args)});
}