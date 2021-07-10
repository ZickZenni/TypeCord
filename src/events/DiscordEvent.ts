import { Client } from "discord.js";

export default class DiscordEvent {
    name: string;

    constructor (name: string = "DISCORDEVENTSTRUCTURECLASS") {
        this.name = name;
    }

    async execute(client: Client, ...args: any[]) {
    }
}