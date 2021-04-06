const db = require('../../models/wans')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'cwarn',
    run : async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('У вас не достаточно прав на использование данной команды')

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('Вы не выбрали участника')
        if(message.member.roles.highest.position <= user.roles.highest.position) return message.channel.send(`${message.author} вы не можете дать предупреждение кому то из модерации`)
        if(message.member.roles.highest.position == user.roles.highest.position) return message.channel.send(`${message.author} вы не можете дать предупреждение кому то из модерации`)
        if(message.author.id == user.id) return message.channel.send(`${message.author} Вы не можете использовать эту команду на себе`)

        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(new MessageEmbed()
                .setDescription(`Предупреждения ${user}  были очищены`)
                .setColor("#343638")
                )    
            } else {
                message.channel.send(`${user} не имеет предупреждений`)
            }
        })
    }
}