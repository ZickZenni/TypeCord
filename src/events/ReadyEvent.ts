import { Client } from "discord.js";
import logINFO from "../utils/Logger";
import DiscordEvent from "./DiscordEvent";

export default class ReadyEvent extends DiscordEvent {
    constructor() {
        super("ready");
    }

    async execute(client: Client, ...args: any[]) {
        logINFO(`${client.user?.username} is online and ready to use! `);
    }
}
