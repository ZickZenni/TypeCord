import { Message } from "discord.js";
import Command from "./Command";

export default class TestCommand extends Command {
    constructor() {
        super("test");
    }

    async execute(message: Message) {
        message.channel.send("no");
    }
}