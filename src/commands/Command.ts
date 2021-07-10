import { Message } from "discord.js";

export default class Command {
    cmd: string;

    constructor (cmd: string = "COMMANDSTRUCTURECLASS") {
        this.cmd = cmd;
    }

    async execute(message: Message) {

    }
}