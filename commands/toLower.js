"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = {
    name: "toLower",
    aliases: ["tu", "toLower", "toLowercase"],
    description: "Converts your message to Lowercase!",
    usage: "toLower {text}",
    run: function (client, args, message) {
        if (args.length < 1)
            return;
        message.channel.send(args.join(' ').toLowerCase());
    }
};
module.exports = command;
