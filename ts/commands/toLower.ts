import { Command } from '../types'

const command: Command = {
    name: "toLower",
    aliases: [ "tl", "toLower", "toLowercase" ],
    description: "Converts your message to Lowercase!",
    usage: "toLower {text}",
    run: function(client, args, message) {
        if (args.length < 1) return;
        message.channel.send(args.join(' ').toLowerCase())
    }
}

module.exports = command