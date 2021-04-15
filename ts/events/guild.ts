import * as Discord from "discord.js"

module.exports = {
    registerEvent(client: Discord.Client) {
        client.on('guildBanAdd', (guild, user) => {
            //@ts-ignore
            guild.channels.cache.get('ID').send(new Discord.MessageEmbed()
                                                .setColor("RANDOM")
                                                .setTitle("User banned")
                                                .setDescription(`Banned user: ${user}`))
        })
        client.on('guildBanRemove', (guild, user) => {console.log(`Pardoned ${user.username}`)})
        client.on('guildMemberAdd', (member) => {console.log(`${member.displayName} joined to Nah Idk`)})
        client.on('guildMemberRemove', (member) => {console.log(`${member.displayName} removed from Nah Idk`)});
    }
}