import * as Discord from "discord.js"
import * as fs from "fs"

import {Command} from "./types"

const { prefix } = require('./bot.json');

require('dotenv').config()


const client = new Discord.Client()

// @ts-ignore
client.commands = new Discord.Collection()


client.on('ready', () => {
	const files = fs.readdirSync("./commands")
	for (var file of files) {
        if (file.endsWith(".js")) {
            const item: Command = require(`./commands/${file}`)

			// @ts-ignore
            client.commands.set(item.name, item)
        }
    }

	client.users.cache.find(user => user.id === '363581701491916800').send("מישהו הפעיל אותי");

    // @ts-ignore
	global.serverAdmin = client.guilds.cache.get("602587177125281792").owner
	console.log(`Ready!`);
});

client.login(process.env.TOKEN).catch(err => console.log(err));

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.find(c => c.aliases.includes(commandName) || c.name === commandName)

	if (command) {
		console.log(`${message.member.displayName} used command: ${commandName}`)
		command.run(client, args, message)
	}
	else {
		message.channel.send("Command doesn't exist!")
	}
});


client.on('message', message => {
	if (message.content.match(/discord\.((com\/invite)|(gg))\/\w+/gmi) && !message.member.hasPermission("ADMINISTRATOR")) {
		message.delete()
		message.channel.send(`נא לא לפרסם שרתים ${message.author}`)
	}
})