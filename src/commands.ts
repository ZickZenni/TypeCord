import { Message } from "discord.js";
import Command from "./commands/Command";

const commands: Array<Command> = new Array();

export function loadCommand(command: Command) {
    commands.push(command);
}

export function executeCommand(message: Message, command: string) {
    commands.map((cmd: Command) => {
        if (cmd.cmd == command) {
            cmd.execute(message);
        } 
    });
}