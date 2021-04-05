const db = require('../../models/wans');
const { Message, MessageEmbed } = require('discord.js')

module.exports ={
    name : 'warns',
    run : async(client, message, args)=>{
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author} У вас не достаточно прав`)

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`${message.author} вы не выбрали пользователя для этой команды`)
        if(!user.kickable) return message.channel.send(`вы не можете использовать данную команду на комто кто выше вас`)

        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) =>{
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                .setTitle(`Предупреждения пользователя: ${user.user.tag}`)
                .setDescription(
                    data.content.map(
                        (w, i) =>
                        `\`${i + 1}\` | Модератор : ${message.guild.members.cache.get(w.moderator).user.tag}\nПричина: ${w.reason}`
                    )
                )
                .setColor("#343638")
                )
            } else {
                message.channel.send(`${user} не имеет предупреждений`)
            }
        })
    }
}