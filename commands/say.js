"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const command = {
    name: "say",
    aliases: ["say", "speak"],
    description: "Says your message!",
    usage: "say {text}",
    run: function (client, args, message) {
        if (args.length < 1)
            return;
        message.channel.send(Discord.Util.removeMentions(args.join(' ').toUpperCase()));
    }
};
module.exports = command;
