"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = {
    name: "help",
    aliases: ["help", "assistance"],
    description: "Notifies the server owner!",
    usage: "help",
    run: function (client, args, message) {
        message.delete();
        // @ts-ignore
        global.serverAdmin.send(`עמיתוסאן יש לך הודעה חדשה מ: <@${message.author.id}>\n ${args.join('')}`);
        message.member.send(`פניתך  נשלחה למנהל השרת ויטפל בה בהקדם האפשרי!`);
    }
};
module.exports = command;
