import { Command } from '../types'
import * as Discord from 'discord.js'

const command: Command = {
    name: "say",
    aliases: [ "say", "speak" ],
    description: "Says your message!",
    usage: "say {text}",
    run: function(client, args, message) {
        if (args.length < 1) return;
        message.channel.send(Discord.Util.removeMentions(args.join(' ').toUpperCase()))
    }
}

module.exports = command