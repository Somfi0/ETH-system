const db = require('../../models/wans');
const { Message, MessageEmbed } = require('discord.js')

module.exports ={
    name : 'warn',
    run : async(client, message, args)=>{
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`${message.author} У вас не достаточно прав`)

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`${message.author} вы не выбрали пользователя для этой команды`)
        if(message.author.id == user.id) return message.channel.send(`${message.author} Вы не можете использовать эту команду на себе`)
        if(message.member.roles.highest.position <= user.roles.highest.position) return message.channel.send(`${message.author} вы не можете дать предупреждение кому то из модерации`)
        if(message.member.roles.highest.position == user.roles.highest.position) return message.channel.send(`${message.author} вы не можете дать предупреждение кому то из модерации`)

        const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(`${message.author} вы не указали причину`)

        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) =>{
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                        moderator : message.author.id,
                        reason : reason
                        }
                    ]
                })
            }else {
                const obj = {
                    moderator : message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        message.channel.send(new MessageEmbed()
            .setDescription(`${user} получил предупреждение\n По причине: ${reason}`)
            .setColor("#343638")
        )
    }
}