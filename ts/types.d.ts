import * as Discord from "discord.js";

declare function runFunc(client: Discord.Client, args: Array<string>, message: Discord.Message): void

export type Command = {
    name: string,
    aliases: Array<string>,
    usage: string,
    description: string,
    run: typeof runFunc
}

