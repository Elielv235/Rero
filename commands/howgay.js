"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const command = {
    name: "howgay",
    aliases: ["howgay"],
    description: "Notifies the server owner!",
    usage: "",
    run: function (client, args, message) {
        var howGay = Math.floor(Math.random() * 100);
        console.log(howGay);
        if (message.mentions) {
            const emessage = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Gay test")
                .setDescription(`${message.mentions} are ${howGay}% gay`);
        }
        else {
            const emessage = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Gay test")
                .setDescription(`You are ${howGay}% gay`);
            message.channel.send(emessage);
        }
    }
};
module.exports = command;
