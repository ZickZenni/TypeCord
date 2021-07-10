import { Client, Message } from "discord.js";
import { executeCommand } from "../commands";
import logINFO from "../utils/Logger";
import DiscordEvent from "./DiscordEvent";

declare var process : {
    env: {
      BOT_PREFIX: string
    }
}

export default class MessageEvent extends DiscordEvent {
    constructor() {
        super("message");
    }

    async execute(client: Client, ...args: any[]) {
        var msg: Message = args[0];

        if (msg.author.bot) {
            return;
        }

        if (msg.content.startsWith(process.env.BOT_PREFIX)) {
            var cmd: string = msg.content.substring(process.env.BOT_PREFIX.length, msg.content.length);
            
            if (cmd.includes(" ")) {
                cmd = cmd.split(" ")[0];
            }

            executeCommand(msg, cmd);
        }
    }
}