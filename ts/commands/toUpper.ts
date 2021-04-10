import { Command } from '../types'

const command: Command = {
    name: "toUpper",
    aliases: [ "tu", "toUpper", "toUppercase" ],
    description: "Converts your message to uppercase!",
    usage: "toUpper {text}",
    run: function(client, args, message) {
        if (args.length < 1) return;
        message.channel.send(args.join(' ').toUpperCase())
    }
}

module.exports = command